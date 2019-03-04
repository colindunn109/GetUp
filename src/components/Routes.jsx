import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Error from './Error';
import MainNav from './MainNav';


const Routes = () => (
  <Switch>
    <Route path = "/" exact/>
    <Route path = "/login" component={Login}/>
    <Route path = "/signup" component={Signup}/>
    <Route component = {Error} />
  </Switch>

);

export default Routes
