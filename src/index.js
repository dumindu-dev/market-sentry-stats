const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const ApiRouter = require("./routes/routes.config");

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use("/api", ApiRouter);

app.listen(4000, () => {
    console.log('listening on port 4000');
});