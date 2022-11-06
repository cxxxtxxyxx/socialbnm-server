import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { env } from './src/config/config.js';
import { hello, api } from './src/api/routes/hello.js';
import { mail } from './src/api/routes/mail.js';

const app = express();

app.use(express.json());

app.get('/api/:appid/:version/:schemas/:idcmd', api);
app.get('/', hello);
app.get('/mail', mail);

console.log(env.PORT);

export const server = app.listen(env.PORT, () => {
  console.log(`Social Book Mark Server listening on port ${env.PORT}`);
});
