const dotenv = require('dotenv');
dotenv.config();

const adminMailTemplate = (name, email, message) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Request</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">

    <h2 style="color: #333;">New Contact Request from Your Portfolio Website</h2>

    <p>Dear Harsh,</p>

    <p>You have received a new message through your portfolio website's "Contact Us" section. Here are the details:</p>

    <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong> <br>
        ${message}</li>
    </ul>

    <hr style="border: 1px solid #ccc; margin: 20px 0;">

    <h3 style="color: #333;">Next Steps:</h3>
    <ol>
        <li><strong>Review the Message:</strong> Carefully read the message to understand the sender's inquiry or request.</li>
        <li><strong>Respond Promptly:</strong> Reach out to the sender via the provided email (${email}) to continue the conversation.</li>
    </ol>

    <p>Feel free to keep this email for your records or add any notes regarding the sender’s inquiry.</p>

    <p>Best regards,<br>
    HXARTZ</p>

</body>
</html>

    `
}

module.exports = adminMailTemplate;