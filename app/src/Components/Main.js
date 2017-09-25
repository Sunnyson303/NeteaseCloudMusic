import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, Link} from 'react-router-dom'
import Dashboard from '../Pages/Nav/Dashboard'


export default class Main extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="c-main height-100 scroll-y">
        <Route path={'/Dashboard'} component={Dashboard}/>
      </div>
    )
  }
}
