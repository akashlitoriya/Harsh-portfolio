const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewId:{
        type:String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    brandName:{
        type: String,
        required: true,
    },
    social:{
        type: String,
        required: true,
    },
    review:{
        type: String,
        required: true,
    },
    approved:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Review', reviewSchema);