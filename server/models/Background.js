const mongoose = require('mongoose')

const BackgroundSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    bgType: {
        type: String,
        enum: ["Image", "Video"],
        required: true
    },
    cloudId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Background", BackgroundSchema)