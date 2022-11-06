import mailer from '../../utils/mailer.js';

export function mail(req, res) {
  const { email } = req.body;

  let emailParams = {
    toEmail: email,
    subject: 'hello nodemailer user',
    text: 'hello user!',
  };

  mailer.sendGmail(emailParams);

  res.status(200).send('성공');
}
