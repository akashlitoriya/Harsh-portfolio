const Project = require('../models/Project');
const { uploadOnCloud, deleteFileOnCloud } = require('../utils/FileUploader');
const dotenv = require('dotenv');
const uuid = require("uuid4");

dotenv.config();

exports.createProject = async(req, res) => {
    try{
        const{title, description, category, isImportant} = req.body;
        //console.log("REQ FILES: ", req.files);
        if(!req.files || !req.files["mainFile"]){
            return res.status(400).json({message: "File is required."})
        }
        const file = req.files["mainFile"][0];

        if(!title || !description || !category || !isImportant){
            return res.status(400).json({message: "All fields are required."})
        }

        if(!file || (!file.mimetype.split('/')[0].match('image') && !file.mimetype.split('/')[0].match('video'))){
            return res.status(400).json({message:"Invalid file type."});
        }
        
        let cloudFile = await uploadOnCloud(file, process.env.CLOUDINARY_CLOUD_FOLDER);
        let galleryUpload = [];
        for(let i=0; req.files["gallery"] &&  i<req.files["gallery"].length; i++){
            const galleryFile = req.files["gallery"][i];
            galleryUpload.push(uploadOnCloud(galleryFile, process.env.CLOUDINARY_CLOUD_FOLDER));
        }

        galleryUpload = await Promise.allSettled(galleryUpload);
        let galleryUrls = galleryUpload.map((file)=>{
            return file.value?.secure_url;
        })

        const newProject = await Project.create({
            title,
            description,
            category,
            important: isImportant,
            file_url: cloudFile.secure_url,
            projectId: uuid(),
            fileType: file.mimetype.split('/')[0],
            publicId: cloudFile.public_id,
            gallery: galleryUrls
        })
        //TODO: Remove file from server after uploading to cloud

        res.status(201).json({
            success: true,
            message: "Project created successfully"
        })
    }
    catch(err){
        console.log(err)
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



