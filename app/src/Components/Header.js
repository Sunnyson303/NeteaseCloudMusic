import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Autosuggest from 'react-autosuggest';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import DeleteIcon from 'material-ui-icons/Delete';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import {Mail, NavigateBefore, NavigateNext, Settings} from 'material-ui-icons'

class Header extends Component {
  state = {
    kw: ''
  }
  render() {
    const classes = this.props.classes
    return (
      <AppBar className="c-header">
        <Toolbar>
          <Grid container className="header-container">
            <Grid item xs={2} className="header-left">
              <Typography type="title" color="inherit"> 网易云音乐</Typography>
            </Grid>
            <Grid item xs={9} className="header-middle">
              <div className="searchbar-wrap">
                <div className="page-nav">
                  <NavigateBefore />
                  <NavigateNext />
                </div>
                <TextField
                  id="name"
                  value={this.state.kw}
                  onChange={event => this.setState({ kw: event.target.value })}
                  placeholder="搜索音乐，歌手 ，歌词，用户"
                  margin="normal"
                />
              </div>
              <div className="email-wrap">
                <Badge badgeContent={4} color="primary">
                  <Mail />
                </Badge>
                <Settings className="settings"/>
              </div>  
            </Grid>
            <Grid item xs={1} className="header-right">
              <div className="user-avatar">
                <Avatar src="//material-ui-1dab0.firebaseapp.com/static/images/uxceo-128.jpg"/>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header