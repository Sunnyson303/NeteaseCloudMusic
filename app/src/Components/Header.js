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
import Icon from 'material-ui/Icon';
import DeleteIcon from 'material-ui-icons/Delete';

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
    flex: 5,
    display: 'flex'
  },
  flip: {
    display: 'inline-block'
  }
}

@withStyles(styles)
class Header extends Component {
  state = {
    kw: ''
  }
  render() {
    const classes = this.props.classes
    return (
      <AppBar position="fixed" className={classes.colorPrimary}>
        <Toolbar disableGutters className={classes.toolbar}>
          <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
          </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
            网易云音乐
          </Typography>
          <div className={classes.searchbar}>
            <div className={classes.flip}>
              <i className="material-icons">keyboard_arrow_left</i>
              <i className="material-icons">keyboard_arrow_right</i>
            </div>
            <TextField
              id="name"
              value={this.state.kw}
              onChange={event => this.setState({ kw: event.target.value })}
              placeholder="搜索音乐，歌手 ，歌词，用户"
              margin="normal"
            />
          </div>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header