import React from 'react';
import {Map, Marker,GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {

  render() {

    const styles = {
      width: '50%',
      height: '50%'
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Map google = {this.props.google} style={styles}/>
        <Marker position={{lat: 37.7749, lng: -122.4194}}/>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAeThb2cstxvws3owBgx-gKcSsqRxgAymU'
})(MapContainer);
