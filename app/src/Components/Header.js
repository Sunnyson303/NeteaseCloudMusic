import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Autosuggest from 'react-autosuggest';
import TextField from 'material-ui/TextField';

const styles = {
  colorPrimary: {
    backgroundColor: 'rgb(172, 51, 25)'
  },
  toolbar: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  searchbar: {
    flex: 3
  }
}

class Header extends Component {
  state = {
    name: 'test'
  }
  render() {
    const classes = this.props.classes
    return (
      <AppBar position="fixed" classes={classes.colorPrimary}>
        <Toolbar disableGutters className={classes.toolbar}>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            网易云音乐
          </Typography>
          <div className={classes.searchbar}>
            <TextField
              id="name"
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
              margin="normal"
            />
          </div>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header)