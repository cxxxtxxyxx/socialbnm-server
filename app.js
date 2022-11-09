import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import indexRouter from './src/api/routes/index.js';
import { env } from './config/config.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/', indexRouter);
app.use((err, req, res, next) => {
  return res.send(err);
});

export const server = app.listen(env.PORT, () => {
  console.log(`Social Book Mark Server listening on port ${env.PORT}`);
});
