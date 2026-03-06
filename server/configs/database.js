const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
        });
    mongoose.set('debug', true);
}

module.exports = connectDB;