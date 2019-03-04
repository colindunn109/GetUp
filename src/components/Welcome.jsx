import React from 'react';
import { NavLink } from 'react-router-dom';


const Welcome = () => (
  <div>
    <h1>Get up, Get out, Get healthy!</h1><br />
    <NavLink to='/login'><button className='login'>Login</button></NavLink><br />
    <NavLink to='/signup'><button className='signup'>Signup</button></NavLink>
  </div>
);

export default Welcome;
