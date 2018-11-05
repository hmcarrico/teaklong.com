import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Completes from '../components/Completes/Completes';
import Decks from '../components/Decks/Decks';
import Wheels from '../components/Wheels/Wheels';
import Product from '../components/product/product';
import All from '../components/AllProducts/AllProducts';
import Add from '../components/AddProduct/AddProduct';

export default <Switch>
    <Route exact path='/products/completes' component={Completes} />
    <Route path='/products/decks' component={Decks} />
    <Route path='/products/wheels' component={Wheels} />
    <Route path='/products/all' component={All} />
    <Route path='/products/:type/item/:id' component={Product} />
    {/* <Route path='/admin/add' component={Add} /> */}
</Switch>