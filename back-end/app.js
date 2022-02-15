// DEPENDENCIES

const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 8080

// CONFIGURATION

const app = express();
app.use(cors());

// MIDDLEWARE

// ROUTES
const snacksController = require('./controllers/snackController')

app.get('/', (req, res) => {
    res.status(200).send('Welcome to our Snack database!')
});

app.use('/snacks', snacksController)

// EXPORT
module.exports = app;
