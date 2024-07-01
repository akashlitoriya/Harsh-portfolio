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

  url: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    enum: ["Product Visualization", "Product Animation", "Personal Project"],
    required: true,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
