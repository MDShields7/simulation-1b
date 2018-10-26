import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import App from 'App';
import Home from './components/Home/Home'
import Couches from './components/Couches/Couches'
import Profile from './components/Profile/Profile'


export default (
    <Switch>
        
        <Route path='/profile' component={Profile}/>
        <Route path='/cool-couches' component={Couches}/>
        <Route path='/' component={Home}/>

    </Switch>
)

