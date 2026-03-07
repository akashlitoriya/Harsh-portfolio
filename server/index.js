const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
//importing configs
const {cloudinaryConnect} = require('./configs/cloudinary');
const connectDB = require('./configs/database');
//importing routes
const reviewRoutes = require('./routes/Review');
const projectRoutes = require('./routes/Project');
const userRoutes = require('./routes/User');
const contactRoutes = require('./routes/Contact');
const backgroundRoutes = require('./routes/Background')
const { createReporter, telegram } = require('@akashlitoriya/masterpager')

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


const reporter = new createReporter([
    new telegram({
        token: process.env.TELEGRAM_BOT_TOKEN,
        chatId: process.env.TELEGRAM_CHAT_ID
    })
],'Hxartz Server')


cloudinaryConnect().then(() => {
    console.log("Connected to Cloudinary successfully");
}).catch(async (err) => {
    await reporter.alert({ message: "Failed to connect to Cloudinary: " + err.message});
    process.exit(1);
});

connectDB().then(() => {
    console.log("Connected to MongoDB successfully");
}).catch(async (err) => {
    await reporter.alert({ message: "Failed to connect to MongoDB: " + err.message});
    process.exit(1);
});


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

app.use(async (err, req, res, next) => {
    await reporter.error(err);
    res.status(500).json({
        message: 'Something went wrong',
        success: false
    })
})
process.on('SIGINT', async () => {
    await reporter.alert({ message: "Server is shutting down due to SIGINT signal" });
    process.exit(0);
})

process.on('SIGTERM', async () => {
    await reporter.alert({ message: "Server is shutting down due to SIGTERM signal" });
    process.exit(0);
})

app.on('uncaughtException', async (err) => {
    await reporter.error(err);
    process.exit(1);
})

app.on('unhandledRejection', async (reason, promise) => {
    await reporter.error(reason);
    process.exit(1);
})
