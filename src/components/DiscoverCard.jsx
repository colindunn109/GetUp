import React, { Component } from 'react';


class DiscoverCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      img: this.props.img,
      title: this.props.title,
      desc: this.props.desc,
    }
  }

  render() {
    return(
      <div>
        {this.state.title}
      </div>
    )
  }
}

export default DiscoverCard
