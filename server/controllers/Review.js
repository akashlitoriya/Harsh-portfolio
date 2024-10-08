const uuid = require('uuid4');
const Review = require('../models/Review');

exports.writeReview = async(req, res) => {
    try{
        const{name, brandName, review, social, email} = req.body;
        if(!name || !brandName || !review || !social || !email){
            return res.status(400).json({
                message: "Please fill all fields"
            })
        }
        const newReview = await Review.create({
            name,
            email,
            brandName,
            review,
            social,
            reviewId: uuid()
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
        const {name, email, social, username, brandName, review} = req.body;

        const reviewEntry = await Review.findOne({reviewId});
        if(!reviewEntry){
            return res.status(404).json({message: "Review not found"})
        }

        const updateReview = await Review.findOneAndUpdate({reviewId}, {
            email: email,
            name: name, 
            brandName: brandName,
            review: review,
            social: social
        }, {new: true}
        )

        res.status(200).json({message: "Review updated successfully", updatedReview: updateReview})

    }catch(err){
        console.log("Error occured while editing review : ", err);
        res.status(500).json({message: "Internal Server Error"});
    }
}