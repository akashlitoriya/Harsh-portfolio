const express = require('express')
const dotenv = require('dotenv');
//importing configs
const {cloudinaryConnect} = require('./configs/cloudinary');
const connectDB = require('./configs/database');
const fileupload = require('express-fileupload');
//importing routes
const reviewRoutes = require('./routes/Review');

const app = express();

//body parser
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000;

//adding server files
app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: 'temp/',
    })
)


cloudinaryConnect();
connectDB();


//routes
app.use('/api/v1/review', reviewRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})