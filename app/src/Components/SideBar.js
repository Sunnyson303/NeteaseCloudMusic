import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {List, ListItem, ListItemIcon, ListItemText, ListSubheader, Avatar} from 'material-ui';
import {QueueMusic, MusicNote, MusicVideo, SupervisorAccount, Share, Star} from 'material-ui-icons'

const menu = {
  savedList: {
    icon: 'QueueMusic',
    items: ['生命不息，抖腿不止', '震撼心灵的史诗音乐']
  }
}
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
        <List subheader={<ListSubheader>我的音乐</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              <MusicNote />
            </ListItemIcon>
            <ListItemText inset primary="iTunes音乐" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MusicVideo />
            </ListItemIcon>
            <ListItemText inset primary="下载的音乐" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MusicVideo />
            </ListItemIcon>
            <ListItemText inset primary="我的歌手" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SupervisorAccount />
            </ListItemIcon>
            <ListItemText inset primary="我的MV" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SupervisorAccount />
            </ListItemIcon>
            <ListItemText inset primary="我的电台" />
          </ListItem>
        </List>
        <List subheader={<ListSubheader>创建的歌单</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              <MusicNote />
            </ListItemIcon>
            <ListItemText inset primary="我喜欢的音乐" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MusicVideo />
            </ListItemIcon>
            <ListItemText inset primary="sunnyson的红心歌曲" />
          </ListItem>
        </List>
        <List subheader={<ListSubheader>收藏的歌单</ListSubheader>}>
          {
            ['生命不息，抖腿不止', '震撼心灵的史诗音乐'].map( item => {
              return (
                <ListItem button>
                  <ListItemIcon>
                    <QueueMusic />
                  </ListItemIcon>
                  <ListItemText inset primary={item} />
                </ListItem>
              )
            })
          }
        </List>
        <div className="playing-info">
          <div className="left">
            <Avatar className ="avatar" src="//material-ui-1dab0.firebaseapp.com/static/images/uxceo-128.jpg"/>
            <div>
              <span>离人殇</span>
              <div className="album-info">
                <a href="">赵方婧</a>
                / 
                <a href="">音阙诗听</a>
              </div>
            </div>
          </div>
          <div className="item buttons">
            <Share />
            <Star />
          </div>
        </div>
      </div>
    )
  }
}
