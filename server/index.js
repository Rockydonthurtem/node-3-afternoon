const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

const { checkForSession } = require("./middleware/checkForSession")

const swag_controller = require("./controller/swag_controller")

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnilitilized: true
}));
// app.use(checkForSession());
console.log(checkForSession)

app.get('/api/swag/', swag_controller.read)

const port = 3000
// const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}.`); });

secret: "ff";