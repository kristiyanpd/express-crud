const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const {userRouter} = require("./src/configs/manualDi");

// JSON Parsing
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Routes
app.use("/v1/users", userRouter.router);

// Start process
app.listen(port, async () => {
    console.log(`App running on port ${port}`);
});
