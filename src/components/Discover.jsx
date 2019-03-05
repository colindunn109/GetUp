import React, { Component } from 'react';
import DiscoverCard from './DiscoverCard';

class Discover extends Component{

  constructor(props){
    super(props);
    this.state = {
      cards: [],
    }
  }


  render() {
    return(
      <div>
        <DiscoverCard title={"Hello world!"} img={"not yet"} desc={"not yet"}/>
      </div>
    )
  }
}

export default Discover;
