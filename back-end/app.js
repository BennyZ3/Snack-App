// DEPENDENCIES

const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 8080

// CONFIGURATION
app.use(cors());

const app = express();

// MIDDLEWARE

// ROUTES
const snacksController = require('./controllers/snackController')

app.get('/', (req, res) => {
    res.status(200).send('Welcome to our Snack database!')
});

app.use('/snacks', snacksController)

// EXPORT
module.exports = app;
