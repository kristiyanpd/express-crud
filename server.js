const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { userRouter } = require('./src/configs/manualDi');

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
