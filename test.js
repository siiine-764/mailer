import * as nodemailer from 'nodemailer';

const user = 'outlook_43C1244BDCEC7FF4@outlook.com'
const pass = 'Yassine'

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    auth: {
        user: user,
        pass: pass
    },
});

const message = {
    from: 'ayacheyassine2000@gmail.com',
    to: 'ayacheyassine2000@gmail.com',
    subject: 'apeh',
    text: 'apepepepepe',
    attachments: [
        {
            filename: 'test.txt',
            content: "aaappppehhhh"
        }
    ]
};

transporter.sendMail(message, (err, info) => {
    if (err) {
        console.error(err);
    } else {
        console.log(info);
    }
});