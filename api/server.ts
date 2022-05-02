import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import path from 'path';
import cors from 'cors';
import trees from './routes/trees';

env.config({ path: path.resolve(__dirname, './.env') });

const app = express();

const start = async () => {
  app.use(cors());
  app.use(bodyParser.json());

  app.use('/trees', trees);

  app.get('/', (_req: Request, res: Response) => {
    res.send('Connected to Skilltrees API!');
  });

  app.listen(process.env.API_PORT, () => {
    console.log(`server listening at ${process.env.API_HOST}:${process.env.API_PORT}`);
  });
};

start().catch((error) => {
  throw error;
});
