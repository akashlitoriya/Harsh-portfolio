const cloudinary = require('cloudinary').v2;

exports.uploadOnCloud = async(file, folder) => {
    try{
        let options = {folder};
        options.resource_type = "auto";
        const result = await cloudinary.uploader.upload(file.tempFilePath, options);
        return result;
    }
    catch(err){
        console.error(err)
    }
}