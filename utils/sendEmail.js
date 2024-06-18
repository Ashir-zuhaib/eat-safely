const nodemailer = require("nodemailer");
const MailComposer = require("nodemailer/lib/mail-composer");

const sendEmail = async (mailOptions) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Change this to your email provider (e.g., 'Outlook', 'Yahoo', etc.)
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.email, // Your email address
      pass: process.env.pass, // Your email password
    },
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
};
module.exports = { sendEmail };
