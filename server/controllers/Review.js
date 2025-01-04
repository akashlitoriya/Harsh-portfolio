const uuid = require('uuid4');
const Review = require('../models/Review');
const { uploadOnCloud, deleteFileOnCloud} = require('../utils/FileUploader')

exports.writeReview = async(req, res) => {
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
        console.log("Failed to add review: ", err.message)
        res.status(500).json({
            message: "Failed to add review",
            error: err.message
        })
    }
}

exports.getReviews = async(req, res) => {
    try{
        const reviews = await Review.find({approved: true});

        res.status(200).json({
            message: "Successfully retrieved reviews",
            reviews: reviews
        })
    }catch(err){
        res.status(500).json({
            message: "Failed to retrieve reviews",
            error : err.message
        })
    }
}

exports.getPendingReviews = async(req,res) =>{
    try{
        const reviews = await Review.find({approved: false});
        res.status(200).json({
            message:"Successfully retrieved pending reviews.",
            reviews: reviews
        })
    }catch(err){
        res.status(500).json({message: "Failed to retrieve reviews",
            error: err.message
        })
    }
}

exports.approveReview = async(req, res) =>{
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
        console.log("ERROR APPROVING REVIEW : ", err);
        res.status(500).json({
            message: "Failed to approve review",
            error: err.message
        })
    }
}

exports.reviews = async(req, res) =>{
    try{
        const review = await Review.find({});
        res.status(200).json({
            message:"Successfully fetched Reviews",
            review: review
        })
    }catch(err){
        console.log("ERROR FETCHING REVIEWS : ", err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

exports.deleteReview = async(req, res) => {
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
        console.log("ERROR DELETING REVIEW : ", err);
        res.status(500).json({
            message: "Failed to delete review",
            error: err.message
        })
    }
}

exports.editReview = async(req, res) => {
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
        console.log("Error occured while editing review : ", err);
        res.status(500).json({message: "Internal Server Error"});
    }
}