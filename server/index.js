const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const authController = require('./authController'); 
const productController = require('./productController'); 
const path = require('path')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );
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
app.get('/api/all', productController.getAll)

//auth endpoints
app.get('/auth/callback', authController.login);
app.get('/api/user-data', (req, res) => {
    res.json({ user: req.session.user});
  });
app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.send();
  });

//cart endpoints
app.get('/session/cart', (req, res) => {
    console.log(req.session)
    console.log(req.session.cart)
    res.status(200).send(req.session.cart)
});
app.post('/session/cart', (req, res) => {
    let item = req.body;
    req.session.cart.push(item);
    res.status(200).json(req.session.cart)
})
app.delete('/session/cart/:id', (req, res) => {
    let {id} = req.params;
        let newCart = req.session.cart.findIndex(item => {
           return +id === item.id
        })
        if(newCart === -1){
            res.status(404).send(`Item with id ${id} does now exist`)
        }else {
            req.session.cart.splice(newCart, 1)
            res.json(req.session.cart)
        }
})

//Zeit Host
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
  })

const port = process.env.SERVER_PORT || 4444;
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})