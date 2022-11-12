import express from 'express';
import Model from '../../../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { User } = Model;

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).json({ message: '입력 정보를 확인하세요' });
  }
  console.log(user);

  const isValidPasswd = await bcrypt.compare(
    password,
    user.dataValues.password
  );
  if (!isValidPasswd) {
    return res.status(404).json({ message: '입력 정보를 확인하세요' });
  }
  return res.send('200');

  const newToken = jwt.sign({ type: 'JWT' });
});

export default router;
