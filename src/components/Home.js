import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNav from './MainNav';
import Routes from './Routes';


const Home = () => (
  <BrowserRouter>
    <div>
      <MainNav />
      <Routes />
    </div>
  </BrowserRouter>

);

export default Home
