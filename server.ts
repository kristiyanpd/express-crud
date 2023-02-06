import express, { Express } from 'express';
import bodyParser from 'body-parser';
import userRouter from './src/configs/manualDi';

const app: Express = express();

// JSON Parsing
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// Routes
app.use('/v1/users', userRouter.router);

// Start process
app.listen(3000);
