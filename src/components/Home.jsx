import React, { Component } from 'react';
import Discover from './Discover';

class Home extends Component {
  state = {}

  render(){
    return (
      <div>
        <div className='home-discover'>
          <Discover />
        </div>
        <div className='home-recommended'>
          Recommended
        </div>
        <div className='home-exploration'>
          Exploration
        </div>
      </div>
    )
  }
}

export default Home;
