import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import path from 'path';

env.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

const start = async () => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.listen(process.env.port, () => {
    console.log(`server listening at ${process.env.API_HOST}:${process.env.API_PORT}`);
  });
};

start().catch((error) => {
  throw error;
});
