import React from 'react';
import { NavLink } from 'react-router-dom';


const MainNav = () => (
  <div>
    <h1>Get up, Get out, Get healthy!</h1><br />
    <NavLink to='/login'>Login</NavLink><br />
    <NavLink to='/signup'>Signup</NavLink>
  </div>
);

export default MainNav;
