import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import PlayBar from './Components/PlayBar'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Header></Header>
          <div className="container">
            <SideBar></SideBar>
            <main></main>
          </div>
          <PlayBar></PlayBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
