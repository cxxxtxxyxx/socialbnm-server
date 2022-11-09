import express from 'express';
import jwt from 'jsonwebtoken';
import { token } from '../../../config/config.js';
import user from './../../../models/user.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const receivedToken = req.query.token;
  const verified = jwt.verify(receivedToken, token.ACCESS, (err, decoded) => {
    if (err) return null;
    return decoded;
  });

  if (!verified) {
    return res.status(404).json({ error: '유효하지 않은 접근입니다.' });
  }

  const { email } = verified;

  await user.update(
    { isvalid: true },
    {
      where: {
        email,
      },
    }
  );

  return res.send('승인되었습니다');
});

export default router;
