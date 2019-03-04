import React from 'react';
import { NavLink } from 'react-router-dom';


const MainNav = () => (
  <div>
    <NavLink to='/'>Home</NavLink><br />
    <NavLink to='/login'>Login</NavLink><br />
    <NavLink to='/signup'>Signup</NavLink>
  </div>
);

export default MainNav;
