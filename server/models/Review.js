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
    company:{
        type: String,
        required: true,
    },
    companyLogo:{
        type: String,
        required: true,
    },
    companySocial:{
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