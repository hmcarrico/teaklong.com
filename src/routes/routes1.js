import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Cart from '../components/Cart/Cart';
import Products from '../components/Products/Products';
import Add from '../components/AddProduct/AddProduct';
import OrderHistory from '../components/OrderHistory/OrderHistory';
import Mail from '../components/Nodemailer/Nodemailer';
import Weather from '../components/Weather/Weather.js';
import Search from '../components/Search/Search';
import StepOneDeck from '../components/BoardWizard/StepOneDeck';
import StepTwoTrucks from '../components/BoardWizard/StepTwoTrucks'
import StepThreeWheels from '../components/BoardWizard/StepThreeWheels'

export default <Switch>
    <Route path='/choose/deck' component={StepOneDeck} />
    <Route path='/choose/trucks' component={StepTwoTrucks} />
    <Route path='/choose/wheels' component={StepThreeWheels} />
    <Route exact path='/' component={Home} />
    <Route path='/cart' component={Cart} />
    <Route path='/products' component={Products} />
    <Route path='/admin/add' component={Add} />
    <Route path='/orders' component={OrderHistory} />
    <Route path='/contact' component={Mail} />
    <Route path='/boarding-weather-conditions' component={Weather} />
    <Route path='/search' component={Search} />
</Switch>