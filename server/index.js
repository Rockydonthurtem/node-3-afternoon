const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-sessoin');
require('dontenv').config();


const swag_controller = require("./controller/swag_controller")


const checkForSession = require("../server/middleware/checkForSessions")
const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnilitilized: true
}));
app.use(checkForSession);

app.get('./api/swag/', swag_controller.read)


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}.`); });

