import * as dotenv from 'dotenv';

let path: string;
switch (process.env.NODE_ENV) {
  case 'test':
  path = `${__dirname}/../../src/config/.env.test`;
  break;
  case 'production':
  path = `${__dirname}/../../src/config/.env`;
  break;
  default:
  path = `${__dirname}/../../src/config/.env.dev`;
}
dotenv.config({ path , debug: true});

const config = {
  secret: process.env.JWT_SECRET,
  expiresIn: '10h',
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  }
};
export default config;
