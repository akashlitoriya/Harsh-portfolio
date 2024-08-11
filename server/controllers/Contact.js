const sendMail = require('../utils/mailSender');
const authorMailTemplate = require('../utils/AuthorMailTemplate');
const adminMailTemplate = require('../utils/AdminMailTemplate');
const dotenv = require('dotenv');
dotenv.config();

const contactUs = async(req, res) =>{
    try{
        const {name, message, email} = req.body;
        if(!name || !message || !email){
            return res.status(400).json({message: "Please fill all fields"});
        }

        const emailText = authorMailTemplate(name);
        await sendMail(email, "Thank You for Reaching Out", emailText);
        const adminText = adminMailTemplate(name, email, message);
        await sendMail(process.env.MAIL_USER, "New Contact Request", adminText);
        return res.status(200).json({message: "Email sent successfully"});
    }
    catch(err){
        console.log("ERROR OCCUR IN CONTACT US : ", err);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = contactUs;