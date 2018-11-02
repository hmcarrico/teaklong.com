import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Completes from '../components/Completes/Completes';
import Decks from '../components/Decks/Decks';
import Wheels from '../components/Wheels/Wheels';
import Product from '../components/product/product';

export default <Switch>
    <Route exact path='/products/completes' component={Completes} />
    <Route path='/products/decks' component={Decks} />
    <Route path='/products/wheels' component={Wheels} />
    <Route path='/products/complete/item/:id' component={Product} />
</Switch>