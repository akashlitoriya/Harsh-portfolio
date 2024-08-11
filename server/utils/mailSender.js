const nodeMailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodeMailer.createTransport({
    host: `${process.env.MAIL_HOST}`,
    auth: {
        user: `${process.env.MAIL_USER}`,
        pass: `${process.env.MAIL_PASS}`
    }
})

const sendMail = async(to, subject, text) =>{
    const mailOptions = {
        from : `${process.env.MAIL_USER}`,
        to,
        subject,
        html: text
    }

    try{
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    }catch(err){
        console.log("ERROR SENDING MAIL : ", err);
        throw new Error("Error sending mail");
    }
}

module.exports = sendMail;
