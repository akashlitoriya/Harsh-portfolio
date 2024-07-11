const Project = require('../models/Project');
const { uploadOnCloud, deleteFileOnCloud } = require('../utils/FileUploader');
const dotenv = require('dotenv');
const uuid = require("uuid4");

dotenv.config();

exports.createProject = async(req, res) => {
    try{
        const{title, description, category, isImportant} = req.body;
        const file = req.files.file;

        if(!title || !description || !category || !isImportant){
            return res.status(400).json({message: "All fields are required."})
        }

        if(!file || (!file.mimetype.split('/')[0].match('image') && !file.mimetype.split('/')[0].match('video'))){
            return res.status(400).json({message:"Invalid file type."});
        }
        
        let cloudFile = await uploadOnCloud(file, process.env.CLOUDINARY_CLOUD_FOLDER);
        //console.log("cloudFile: ", cloudFile);

        const newProject = await Project.create({
            title,
            description,
            category,
            important: isImportant,
            url: cloudFile.secure_url,
            projectId: uuid(),
            fileType: file.mimetype.split('/')[0],
            publicId: cloudFile.public_id
        })

        res.status(201).json({
            success: true,
            message: "Project created successfully"
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
        }, {publicId:0, _id:0, __v:0}).sort({createdAt: -1});

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
            },{publicId:0, _id:0, __v:0}
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
            },{publicId:0, _id:0, __v:0}
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



