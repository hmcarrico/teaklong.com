const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const authController = require('./authController'); 
const productController = require('./productController'); 
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  }));

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
    console.log('connected to database')
});

//Product Endpoints
app.get('/api/completes', productController.getCompletes);
app.get('/api/decks', productController.getDecks);
app.get('/api/wheels', productController.getWheels);

//auth endpoints
app.get('/auth/callback', authController.login);

app.get('/api/user-data', (req, res) => {
    res.json({ user: req.session.user});
  });

const port = process.env.SERVER_PORT || 4444;
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})