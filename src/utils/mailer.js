import nodemailer from 'nodemailer';
import { senderInfo } from '../../config/config.js';

export default {
  sendGmail: (params) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      host: 'smtp.gmail.com',
      secure: false,
      requireTLS: true,
      auth: {
        user: senderInfo.user,
        pass: senderInfo.password,
      },
    });

    const mailOptions = {
      from: senderInfo.user,
      to: params.toEmail,
      subject: params.subject,
      text: params.text,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  },
};
