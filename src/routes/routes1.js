import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Cart from '../components/Cart/Cart';
import Products from '../components/Products/Products';

export default <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/cart' component={Cart} />
    <Route path='/products' component={Products} />
</Switch>