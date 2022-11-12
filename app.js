import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import indexRouter from './src/api/routes/index.js';
import { env, sessionOptions, redisConfig } from './config/config.js';
import session from 'express-session';
import { createClient } from 'redis';

const app = express();
const client = createClient(redisConfig);
client.on('connect', () => console.log('RedisConnected'));

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(session({ sessionOptions }));

app.use('/', indexRouter);
app.use((err, req, res, next) => {
  return res.send(err);
});

export const server = app.listen(env.PORT, () => {
  console.log(`Social Book Mark Server listening on port ${env.PORT}`);
});
