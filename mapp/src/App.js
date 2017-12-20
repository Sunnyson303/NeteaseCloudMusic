import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './common/Layout'
import {observer, inject, Provider} from 'mobx-react'

@observer
class App extends Component {
  
  componentDidMount() {
    console.log(this.props.store);
    // const {store} = this.props
    // store.fetchBanners()
    // console.log(store.Banner.fetchBanners());
  }
  
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <Route path='/' component={Layout} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
