import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import SideBar from './Components/SideBar'
import Main from './Components/Main'
import Header from './Components/Header'
import PlayBar from './Components/PlayBar'

import './App.css'

const styles = {
  app: {

  },
  toolbar: {
    width: '100%'
  },
  flex: {
    flex: 1
  }
}

function App(props) {
  const classes = props.classes
  return (
    <Grid container className="classes.app">
      <Header></Header>
      <Grid container>
        <Grid item xs={4}>
          <SideBar></SideBar>
        </Grid> 
        <Grid item xs={8}>
          <Main></Main>  
        </Grid> 
      </Grid>
      <PlayBar></PlayBar>
    </Grid>
  )
}

export default withStyles(styles)(App)

