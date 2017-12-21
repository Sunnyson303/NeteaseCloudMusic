import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './common/Layout'
import {observer} from 'mobx-react'

@observer
class App extends Component {
  
  componentDidMount() {
  }
  
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
