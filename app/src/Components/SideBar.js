import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

import {Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Avatar, Divider, Dialog} from 'material-ui';
import {QueueMusic, MusicNote, MusicVideo, SupervisorAccount, Share, Star, Fullscreen} from 'material-ui-icons'

import {openPlayDetailModal, fetchSong} from '../actions'

const menu = {
  savedList: {
    icon: 'QueueMusic',
    items: ['生命不息，抖腿不止', '震撼心灵的史诗音乐']
  }
}
class SideBar extends Component {
  
  componentDidMount() {
  }
  
  render() {
    const {openPlayDetailModal} = this.props
    return (
      <div className="c-sidebar">
        <div className="height-100 scroll-y">
          <List subheader={<ListSubheader>推荐</ListSubheader>}>
              <Link to={`/Dashboard/Recommend`}>
            <ListItem button>
              <ListItemIcon>
                <MusicNote />
              </ListItemIcon>
                <ListItemText inset primary="发现音乐" />
            </ListItem>
              </Link>
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
              ['生命不息，抖腿不止', '震撼心灵的史诗音乐'].map((item, index) => {
                return (
                  <ListItem button key={index}>
                    <ListItemIcon>
                      <QueueMusic />
                    </ListItemIcon>
                    <ListItemText inset primary={item} />
                  </ListItem>
                )
              })
            }
          </List>
        </div>
        <Divider />
        <div className="playing-info">
          <div className="left">
            <Avatar 
              className="avatar" 
              src="//material-ui-1dab0.firebaseapp.com/static/images/uxceo-128.jpg"
              onClick={openPlayDetailModal}
            />
            <Fullscreen className="fullscreen" onClick={openPlayDetailModal}/>
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

const mapStateToProps = (state, ownProps) => ({
  
})


const mapDispatchToProps = dispatch => {
  return {
    openPlayDetailModal: e => {
      // fetchSong(347230)
      dispatch(openPlayDetailModal())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBar)