const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  projectId:{
    type: String,
    required:true
  },
  
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  important: {
    type: Boolean,
    required: true,
  },

  file_url: {
    type: String,
    required: true,
  },
  gallery:[
    {
      url: {
        type: String,
        required: true
      },
      publicId: {
        type: String,
        required: true
    }
  }
  ],

  category: {
    type: String,
    enum: ["Product Visualization", "Product Animation", "Personal Project"],
    required: true,
  },
  fileType: {
    type: String,
    enum: ["image", "video"]
  },
  publicId: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  
  }
});

module.exports = mongoose.model("Project", ProjectSchema);
