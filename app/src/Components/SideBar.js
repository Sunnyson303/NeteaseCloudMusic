import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {List, ListItem, ListItemIcon, ListItemText, ListSubheader} from 'material-ui';
import {MusicNote, MusicVideo, SupervisorAccount} from 'material-ui-icons'


export default class SideBar extends Component {
  render() {
    return (
      <div className="c-sidebar">
        <List subheader={<ListSubheader>推荐</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              <MusicNote />
            </ListItemIcon>
            <ListItemText inset primary="发现音乐" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MusicVideo />
            </ListItemIcon>
            <ListItemText inset primary="私人FM" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MusicVideo />
            </ListItemIcon>
            <ListItemText inset primary="MV" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SupervisorAccount />
            </ListItemIcon>
            <ListItemText inset primary="朋友" />
          </ListItem>
        </List>
      </div>
    )
  }
}
