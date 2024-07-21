const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
//importing configs
const {cloudinaryConnect} = require('./configs/cloudinary');
const connectDB = require('./configs/database');
const fileupload = require('express-fileupload');
//importing routes
const reviewRoutes = require('./routes/Review');
const projectRoutes = require('./routes/Project');

const app = express();

//body parser
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000;

app.use(cors({
    origin: "*"
}))

//adding server files
// app.use(
//     fileupload({
//         useTempFiles: true,
//         tempFileDir: 'temp',
//     })
// )


cloudinaryConnect();
connectDB();


//routes
app.use('/api/v1/review', reviewRoutes);
app.use('/api/v1/project', projectRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})