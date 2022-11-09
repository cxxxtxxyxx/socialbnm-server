import express from 'express';
import authRouter from './auth.js';
import signUpRouter from './signup.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/signup', signUpRouter);

export default router;
