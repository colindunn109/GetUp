import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
