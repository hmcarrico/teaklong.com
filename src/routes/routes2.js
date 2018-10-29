import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Completes from '../components/Completes/Completes';
import Decks from '../components/Decks/Decks';
import Wheels from '../components/Wheels/Wheels';

export default <Switch>
    <Route path='/products/completes' component={Completes} />
    <Route path='/products/decks' component={Decks} />
    <Route path='/products/wheels' component={Wheels} />
</Switch>