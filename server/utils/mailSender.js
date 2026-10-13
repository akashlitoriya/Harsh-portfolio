const {
    SendApi,
    Configuration
} = require('@hostinger/mail-sdk');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({accessToken: process.env.HOSTINGER_TOKEN});
const apiInstance = new SendApi(configuration);


const sendMail = async(to, subject, text) =>{
    try {
        const sendRequestPayload = {
            to: [to],
            displayName: 'hxartz',
            subject: subject,
            html: text
        }
        const { status, data } = await apiInstance.sendEmail(
            process.env.HOSTINGER_MAIL_RESOURCE_ID,
            sendRequestPayload
        );
    } catch (err) {
        console.error("Error occured while sending mail")
    }
}

module.exports = sendMail;
