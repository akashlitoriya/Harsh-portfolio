const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
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
    enum: ["illustration", "3dRender"],
    required: true,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
