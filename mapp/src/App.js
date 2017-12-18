import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './common/Layout'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Layout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
