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

// axios.get('https://store.nike.com/html-services/gridwallData?gridwallPath=mens-lifestyle-shoes%2F7puZoneZoi3&country=US&lang_locale=en_US').then(response => {
//     return fs.writeFile('./src/data/nikeMensLifeStyleShoes.js', JSON.stringify(response.data.stores), /* { flag: 'a+' }, */ (err) => {
//         if (err){
//             console.log(err)
//             return response.data.stores
//         }
//     })
// })

const port = process.env.SERVER_PORT || 4444;
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})