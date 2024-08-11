const dotenv = require('dotenv');
dotenv.config();
const authorMailTemplate = (authorName) => {
    return `<!DOCTYPE html>
                <html>
                    <head>
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Reaching Out</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">

    <p>Dear ${authorName},</p>

    <p>Thank you for getting in touch and for your interest in my work! I've received your message and will review it shortly. I appreciate you taking the time to contact me, and I look forward to discussing your project or inquiry in more detail.</p>

    <p><img src="https://res.cloudinary.com/dvu9lo8mq/image/upload/f_auto,q_auto/v1/hxartzPortfolio/z3scukv0ifym1fb8abyo" alt="Your Image Description" style="max-width: 100%; height: auto;"></p>

    <p>In the meantime, feel free to explore my portfolio to see more of my recent work:</p>

    <p><a href=${process.env.CLIENT_URL} style="color: #0066cc; text-decoration: none;">View My Portfolio</a></p>

    <p>I'll be in contact with you soon.</p>

    <p>Best regards,<br>
    HXARTZ<br>
    </p>

</body>
</html>`
}

module.exports = authorMailTemplate;