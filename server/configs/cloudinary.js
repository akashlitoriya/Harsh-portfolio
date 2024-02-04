const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

exports.cloudinaryConnect = async() => {
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_CLOUD_API,
            api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET
        })

        console.log('Cloudinary connected successfully');
    }catch(err){
        console.log('Cloudinary connection failed');
        process.exit(1);
    }
}