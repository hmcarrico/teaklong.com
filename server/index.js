const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
    console.log('connected to database')
});


const port = process.env.SERVER_PORT || 4444;
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})