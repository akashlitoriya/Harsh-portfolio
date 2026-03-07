
const Background = require('../models/Background');
const {uploadOnCloud,deleteFileOnCloud} = require('../utils/FileUploader');
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config();

const addBackground = async(req, res, next) => {
    try{
        const {file} = req;
        if(!file.mimetype.includes('image') && !file.mimetype.includes('video')){
            return res.status(405).json({message: "Invalid file type"})
        }
        const uploadResponse = await uploadOnCloud(file, process.env.CLOUDINARY_CLOUD_FOLDER);

        const background = Background.create({
            url: uploadResponse.secure_url,
            cloudId: uploadResponse.public_id,
            bgType: file.mimetype.includes('image')? "Image" : "Video",
            isMobile: false
        })

        fs.unlinkSync(file.path);
        res.status(200).json({message:"Added Background"});
    }catch(err){
        next(err);
    }
}

const getBackground = async(req, res, next) => {
    try{
        const background = await Background.find({}).exec();
        res.status(200).json({
            message: "Fetched the background",
            bg: background
        })

    }catch(err){
        next(err);
    }
}

const changeBackground = async(req, res, next) =>{
    try{
        const {file} = req;
        const {isMobile} = req.body;
        const background = await Background.findOne({isMobile}).exec();
        const uploadResponse = await uploadOnCloud(file, process.env.CLOUDINARY_CLOUD_FOLDER);
        
        await deleteFileOnCloud(background.cloudId);

        const updateEntry = await Background.findOneAndUpdate({_id: background._id, },{
            url: uploadResponse.secure_url,
            cloudId: uploadResponse.public_id,
            bgType: file.mimetype.split('/')[0].match('image') ? "Image" : "Video"
        }, {new: true});

        res.status(200).json({message: "Background updated successfully"})

    }catch(err){
        next(err);
    }
}

module.exports = {getBackground, addBackground, changeBackground}