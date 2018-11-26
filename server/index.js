const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const authController = require('./controllers/authController'); 
const productController = require('./controllers/productController');
const adminController = require('./controllers/adminController');
const orderController = require('./controllers/orderController')
const path = require('path');
const stripe = require("stripe")("sk_test_48bsYBhFSRnBOUFnGUpFwpKk");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  }));

//Nodemailer
const nodemailer = require('nodemailer');
const creds = require('../nodemailer');
let transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}
let transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/send', (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    let mail = {
      from: name,
      to: 'teaklongcom@gmail.com',
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  }
)
//Stripe Payment
app.post("/api/stripe", (req, res) => {
    const stripeToken = req.body.body;
    stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'Order Id',
        receipt_email: stripeToken.email,
        source: stripeToken.id,
      }, function(err, charge) {
          console.log('charge', charge)
          if(err){
            res.send({
                success: false,
                message: 'Errorr'
            })
          } else {
            res.send({
            success: true,
            message: 'Success'
         })
          }
      });

  });




massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
    console.log('connected to database')
});

//Product Endpoints
app.get('/api/completes', productController.getCompletes);
app.get('/api/decks', productController.getDecks);
app.get('/api/wheels', productController.getWheels);
app.get('/api/trucks', productController.getTrucks);
app.get('/api/all', productController.getAll);
app.get('/api/one/:id', productController.getOne);
app.get('/api/search/:search', productController.search)
app.get('/api/searchCompletes/:search', productController.searchCompletes)
app.get('/api/searchDecks/:search', productController.searchDecks)
app.get('/api/searchWheels/:search', productController.searchWheels)

//Admin Products
app.post('/api/add', adminController.addProduct);
app.delete('/api/delete/:id', adminController.deleteProduct);
app.put(`/api/edit/:id`, adminController.editProduct);

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

//Order Endpoints
app.post('/api/order', orderController.createOrder);
app.post('/api/line', orderController.createLine);
app.get('/api/history/:id', orderController.orderHistory);

//Zeit Host/ocean
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
  })

const port = process.env.SERVER_PORT || 4444;
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})