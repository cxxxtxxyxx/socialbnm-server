import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import initModels from './init-models.js';

const env = config.env.NODE_ENV || 'development';
const dbConfig = config.development;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

const db = initModels(sequelize);

export default { ...db };
