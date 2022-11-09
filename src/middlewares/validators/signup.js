import { body, validationResult } from 'express-validator';

import user from '../../../models/user.js';

const passwordRegex =
  /^(?=.*\d)(?=.*[A-Za-z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

const nicknameRegex = /^[A-Za-z\d_]{4,18}$/;

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array() });
};

async function emailExistValidator(req, res, next) {
  const { email } = req.body;
  const userList = await user.findAll({
    where: {
      email: email,
    },
  });
  if (userList.length !== 0) {
    return res.status(401).send({ message: '이미 존재하는 이메일입니다.' });
  }
  next();
}

async function nicknameExistValidator(req, res, next) {
  const { nickname } = req.body;
  const userList = await user.findAll({
    where: {
      nickname,
    },
  });
  if (userList.length !== 0) {
    return res.status(401).send({ message: '이미 존재하는 닉네임입니다.' });
  }
  next();
}

export const nicknameValidator = [
  body('nickname')
    .trim()
    .custom((value) => nicknameRegex.test(value))
    .withMessage(
      '닉네임은 숫자와 문자 특수문자(_) 4글자 이상 18글자 이하입니다'
    ),
  nicknameExistValidator,
  validate,
];

export const emailValidator = [
  body('email').trim().isEmail().withMessage('올바른 이메일 형식이 아닙니다.'),
  emailExistValidator,
  validate,
];

export const passwordValidator = [
  body('password')
    .trim()
    .custom((value) => {
      console.log(value);
      console.log(passwordRegex.test(value));
      return passwordRegex.test(value);
    })
    .withMessage(
      '8자리 이상 20자리 이하 영문을 한가지 이상, 숫자를 한가지 이상, 특수문자를 한가지 이상을포함시켜주세요'
    ),
  validate,
];
