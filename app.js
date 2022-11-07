import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { env } from './config/config.js';
import mailRouter from './src/api/routes/mail.js';
import signUpRouter from './src/api/routes/signup.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/signup', signUpRouter);
app.use('/mail', mailRouter);

export const server = app.listen(env.PORT, () => {
  console.log(`Social Book Mark Server listening on port ${env.PORT}`);
});
