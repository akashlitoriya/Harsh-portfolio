const cloudinary = require('cloudinary').v2;

exports.uploadOnCloud = async(file, folder) => {
    try{
        let options = {folder};
        options.resource_type = "auto";
        const result = await cloudinary.uploader.upload(file.path, options);
        return result;
    }
    catch(err){
        console.error(err)
    }
}
exports.deleteFileOnCloud = async(id) =>{
    try{
        const result = await cloudinary.uploader.destroy(id);

    }catch(err){
        console.error(err);
    }
}

