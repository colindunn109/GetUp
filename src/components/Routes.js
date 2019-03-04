import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Error from './Error';
import Welcome from './Welcome';
import Home from './Home';


const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path = "/" exact component={Welcome}/>
        <Route path = "/home" component={Home}/>
        <Route path = "/login" component={Login}/>
        <Route path = "/signup" component={Signup}/>
        <Route component = {Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes
