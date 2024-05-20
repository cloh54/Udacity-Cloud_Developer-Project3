import {Sequelize} from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': String(config.password),
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect as Dialect,
  'dialectOptions': {
    ssl: {
      require: true,
      rejectUnauthorized: false // For self-signed certificates. Set to true in production.
    }
  },
  'storage': ':memory:',
});
