import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {

    const style = {
      width: '100vw',
      height: '100vh'
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div style={style}>
        <Map google = {this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAeThb2cstxvws3owBgx-gKcSsqRxgAymU'
})(MapContainer);
