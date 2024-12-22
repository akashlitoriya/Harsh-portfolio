const Project = require('../models/Project');
const { uploadOnCloud, deleteFileOnCloud } = require('../utils/FileUploader');
const dotenv = require('dotenv');
const uuid = require("uuid4");
const fs = require('fs');

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
            return {
                url: file.value?.secure_url,
                publicId: file.value?.public_id
            };
        })

        if(file.mimetype.split('/')[0].match('image')){
            galleryUrls.unshift({url: cloudFile?.secure_url, publicId: cloudFile?.public_id});
        }

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

        fs.unlinkSync(file.path);
        for(let i=0; req.files["gallery"] && i<req.files["gallery"].length; i++){
            fs.unlinkSync(req.files["gallery"][i].path);
        }

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
        console.log("PRODUCT ANIMATION : ", projects);
        res.status(200).json({
            success: true,
            message: "Important Product Animation fetched successfully",
            data: projects
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch important Product Animations",
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
            message: "Important Personal Projects fetched successfully",
            data: projects
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch important Personal Projects",
            error: err.message
        })
    }
}

exports.getImportantProductMockup = async(req, res) => {
    try{
        const projects = await Project.find(
            {
                important: true,
                category: "Product Mockup",
            },{publicId:0, _id:0, __v:0}
        ).sort({createdAt: -1});

        res.status(201).json({
            success: true,
            message: "Important Product Mockup fetched successfully",
            data: projects
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch important Product Mockup",
            error: err.message
        })
    }
}

exports.getImportantBrandVisual = async(req, res) => {
    try{
        const projects = await Project.find(
            {
                important: true,
                category: "Brand Visual",
            },{publicId:0, _id:0, __v:0}
        ).sort({createdAt: -1});

        res.status(201).json({
            success: true,
            message: "Important Brand Visual fetched successfully",
            data: projects
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch important Brand Visual",
            error: err.message
        })
    }
}

exports.getProjects = async(req, res) =>{
    try{
        const projects = await Project.find({}, {publicId:0, _id:0, __v:0}).sort({createdAt: -1});

        res.status(200).json({
            success: true,
            message: "Projects fetched successfully",
            data: projects
        })
    }catch(err){
        console.error("Error Fetching Projects : ",err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        })
    }
}

exports.deleteProject = async(req, res) =>{
    try{
        const {id} = req.params;
        const project = await Project.findOne({projectId: id});

        if(!project){
            return res.status(404).json({
                success: false,
                message: "Project not found"
            })
        }
        await deleteFileOnCloud(project.publicId);
        for(let i=0; i<project.gallery.length; i++){
            await deleteFileOnCloud(project.gallery[i].publicId);
        }

        await Project.deleteOne({projectId: id});
        res.status(200).json({
            message: "Project deleted successfully",
        })

    }catch(err){
        console.error("Error Deleting Project : ",err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        })
    }
}

