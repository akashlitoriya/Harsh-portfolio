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
const userRoutes = require('./routes/User');
const contactRoutes = require('./routes/Contact');
const backgroundRoutes = require('./routes/Background')

const app = express();

//body parser
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000;

let allowedDomains = ["https://hxartz.com", "https://hxartz.vercel.app","https://admin-hxartz.vercel.app"]

app.use(cors({
    origin: function (origin, callback) {
        // if (allowedDomains.indexOf(origin) === -1) {
        //   var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
        //   return callback(new Error(msg), false);
        // }
        return callback(null, true);
      }
}))




cloudinaryConnect();
connectDB();


//routes
app.use('/api/v1/review', reviewRoutes);
app.use('/api/v1/project', projectRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1', backgroundRoutes)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

app.get('/', (req, res) =>{
    res.send("Server is live and running");
})