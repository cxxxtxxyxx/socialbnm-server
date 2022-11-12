import express from 'express';
import authRouter from './auth.js';
import signUpRouter from './signup.js';
import signInRouter from './signin.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/signup', signUpRouter);
router.use('/signin', signInRouter);

export default router;
