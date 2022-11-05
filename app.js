import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { env } from './src/config/config.js';
import { hello, api } from './src/api/routes/hello.js';

const app = express();

app.get('/api/:appid/:version/:schemas/:idcmd', api);
app.get('/', hello);

export const server = app.listen(env.PORT, () => {
  console.log(`Social Book Mark Server listening on port ${env.PORT}`);
});
