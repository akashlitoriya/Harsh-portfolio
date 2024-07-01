const Project = require('../models/Project');
const { uploadOnCloud } = require('../utils/FileUploader');
const dotenv = require('dotenv');
const uuid = require("uuid4");

dotenv.config();

exports.createProject = async(req, res) => {
    try{
        const{title, description, category, important} = req.body;
        const file = req.files.file;

        
        let cloudFile = await uploadOnCloud(file, process.env.CLOUDINARY_CLOUD_FOLDER);
        console.log("cloudFile: ", cloudFile);

        const newProject = await Project.create({
            title,
            description,
            category,
            important,
            url: cloudFile.secure_url,
            projectId: uuid()
        })

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: newProject
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to create project",
            error: err.message
        })
    }
}

exports.getImportantProductAnimation = async(req, res) => {
    try{
        const projects = await Project.find({important: true,
            category: "Product Animation"
        }).sort({createdAt: -1});

        res.status(200).json({
            success: true,
            message: "Important projects fetched successfully",
            data: projects
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch important projects",
            error: err.message
        })
    }
}


exports.getImportantPersonalProject = async(req, res) => {
    try{
        const projects = await Project.find(
            {
                important: true,
                category: "Personal Project",
            }
        ).sort({createdAt: -1});

        res.status(201).json({
            success: true,
            message: "Important 3d renders fetched successfully",
            data: projects
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch important 3d renders",
            error: err.message
        })
    }
}

exports.getImportantProductVisualization = async(req, res) => {
    try{
        const projects = await Project.find(
            {
                important: true,
                category: "Product Visualization",
            }
        ).sort({createdAt: -1});

        res.status(201).json({
            success: true,
            message: "Important 3d renders fetched successfully",
            data: projects
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch important 3d renders",
            error: err.message
        })
    }
}



