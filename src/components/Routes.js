import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Error from './Error';
import Home from './Home';


const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path = "/" exact component={Home}/>
        <Route path = "/login"  exact component={Login}/>
        <Route path = "/signup" exact component={Signup}/>
        <Route component = {Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes
