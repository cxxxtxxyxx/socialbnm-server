import nodemailer from 'nodemailer';
import { senderInfo, mailFormat, mailRegister } from '../../config/config.js';

export default {
  sendGmail: (email, token, nickname) => {
    const transporter = nodemailer.createTransport(mailFormat);

    const mailOptions = (nickname, token) => ({
      from: `${senderInfo.user}`,
      to: email,
      subject: '✨Social Book & Mark 인증 메일입니다!✨',
      html: mailRegister(nickname, token, 'http://localhost:8080'),
      // attachments: [
      //   {
      //     filename: 'mailBody.html',
      //     path: new URL('mailBody.html', import.meta.url).pathname,
      //   },
      // ],
    });

    transporter.sendMail(mailOptions(nickname, token), (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  },
};
