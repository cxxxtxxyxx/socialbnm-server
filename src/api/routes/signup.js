import express from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import Model from '../../../models/index.js';
import {
  emailValidator,
  nicknameValidator,
  passwordValidator,
} from '../../middlewares/validators/signup.js';
import mailer from '../../utils/mailer.js';
import { token } from '../../../config/config.js';
const { User } = Model;
const router = express.Router();

router.post(
  '/',
  emailValidator,
  passwordValidator,
  nicknameValidator,
  async (req, res, next) => {
    const { email, password, nickname } = req.body;
    console.log(email, password);
    const hashPassword = await bcrypt.hash(password, parseInt(10));

    const newUser = await User.create({
      email,
      password: hashPassword,
      nickname,
    });

    console.log(token.ACCESS);
    const accessToken = jwt.sign({ email }, token.ACCESS, {
      expiresIn: parseInt(60 * 60 * 60),
    });
    console.log(accessToken);

    mailer.sendGmail(email, accessToken, nickname);

    return res.status(201).json({ message: '계정이 생성되었습니다.' });
  }
);

export default router;
