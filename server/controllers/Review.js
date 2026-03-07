const uuid = require('uuid4');
const Review = require('../models/Review');
const { uploadOnCloud, deleteFileOnCloud} = require('../utils/FileUploader')

exports.writeReview = async(req, res, next) => {
    try{
        const{name, brandName, review, social, email} = req.body;
        if(!name || !brandName || !review || !social || !email){
            return res.status(400).json({
                message: "Please fill all fields"
            })
        }
        console.log("REQ FILES : ", req.files);
        if(!req.files || !req.files["brandIcon"]){
            return res.status(400).json({message: "Brand Icon is required"});
        }

        const file = req.files["brandIcon"][0];

        let brandIconFile = await uploadOnCloud(file, process.env.CLOUDINARY_CLOUD_FOLDER)

        let brandIcon = {
            url: brandIconFile?.secure_url,
            publicId: brandIconFile?.public_id
        }
        const newReview = await Review.create({
            name,
            email,
            brandName,
            review,
            social,
            reviewId: uuid(),
            brandIcon: brandIcon
        });

        res.status(201).json({
            message: "Successfully added review",
            review: newReview,
        })
    }catch(err){
        next(err);
    }
}

exports.getReviews = async(req, res, next) => {
    try{
        const reviews = await Review.find({approved: true});

        res.status(200).json({
            message: "Successfully retrieved reviews",
            reviews: reviews
        })
    }catch(err){
        next(err);
    }
}

exports.getPendingReviews = async(req,res, next) =>{
    try{
        const reviews = await Review.find({approved: false});
        res.status(200).json({
            message:"Successfully retrieved pending reviews.",
            reviews: reviews
        })
    }catch(err){
        next(err);
    }
}

exports.approveReview = async(req, res, next) =>{
    try{
        const {id} = req.params;
        const review = await Review.findOne({reviewId: id});
        if(!review){
            return res.status(404).json({
                message: "Review Not found!",
            })
        }

        review.approved = true;
        await review.save();
        res.status(201).json({
            message: "Review Approved Successfully"
        })

    }catch(err){
        next(err);
    }
}

exports.reviews = async(req, res, next) =>{
    try{
        const review = await Review.find({});
        res.status(200).json({
            message:"Successfully fetched Reviews",
            review: review
        })
    }catch(err){
        next(err);
    }
}

exports.deleteReview = async(req, res, next) => {
    try{
        console.log("DELETE REVIEW")
        const {id} = req.params;
        const review = await Review.findOne({reviewId: id});
        if(!review){
            return res.status(404).json({
                message: "Review Not found!",
            })
        }
        await deleteFileOnCloud(review?.brandIcon?.publicId);
        await Review.findOneAndDelete({reviewId: id});
        res.status(200).json({
            message: "Review deleted successfully"
        })

    }catch(err){
        next(err);
    }
}

exports.editReview = async(req, res, next) => {
    try{
        const reviewId = req.params.id;
        let {name, email, social, brandName, review, brandIcon, approved} = req.body;
        const reviewEntry = await Review.findOne({reviewId});
        if(!reviewEntry){
            return res.status(404).json({message: "Review not found"})
        }

        if(req.files && req.files["updatedBrandIcon"]){
            let file = req.files["updatedBrandIcon"][0];
            let uploadedFile = await uploadOnCloud(file, process.env.CLOUDINARY_CLOUD_FOLDER);
            await deleteFileOnCloud(brandIcon?.public_id)
            brandIcon = {
                url: uploadedFile?.secure_url,
                public_id: uploadedFile.public_id
            }
        }

        const updateReview = await Review.findOneAndUpdate({reviewId}, {
            email: email,
            name: name, 
            brandName: brandName,
            review: review,
            social: social,
            brandIcon: brandIcon,
            approved: approved
        }, {new: true}
        )

        res.status(200).json({message: "Review updated successfully", updatedReview: updateReview})

    }catch(err){
        next(err);
    }
}