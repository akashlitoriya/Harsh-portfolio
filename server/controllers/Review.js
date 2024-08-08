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