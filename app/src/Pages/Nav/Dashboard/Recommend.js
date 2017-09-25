import React, { Component } from 'react'

import {Card, CardMedia, CardContent, Typography, Divider, Grid} from 'material-ui';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { GridList, GridListTile } from 'material-ui/GridList';
import Menu, { MenuItem } from 'material-ui/Menu';
import Subheader from 'material-ui/List/ListSubheader'
import { Link } from 'react-router-dom'
import {PlayArrow, KeyboardArrowRight} from 'material-ui-icons'


const items = [
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪'
  },{
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪'
  },
]
const personalizedRecommends = [
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    headline: '每日歌曲推荐',
    subTitle: '根据你的口味生成，每天更新！'
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    headline: '每日歌曲推荐',
    subTitle: '根据你的口味生成，每天更新！'
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    headline: '每日歌曲推荐',
    subTitle: '根据你的口味生成，每天更新！'
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    headline: '每日歌曲推荐',
    subTitle: '根据你的口味生成，每天更新！'
  },
]

const newSongItems = []

for(let i=1; i<=20; i++) {
  newSongItems.push({
    title: 'song' + i,
    author: 'author' +i,
    id: i
  })
}

export default class Recommend extends Component {
  state = {
    status: {
        songListPlayMenu: false,
        anchorEl: null,
    }
  }
  handleSongListPlayMenuOpen(event, song) {
    console.log(event.currentTarget);
    this.state.status.anchorEl = event.currentTarget
    this.state.status.songListPlayMenu = true
    this.setState(this.state)
  }
  handleRequestClose() {
    this.state.status.songListPlayMenu = false
    this.setState(this.state)
  }
  render() {
    return (
      <div className="page-dashboard-recommend">
        <Typography type="headline">热门精选</Typography>
        <Divider light/>
        <GridList cols={4} cellHeight={260} className="hot-collection">
        {
          items.map((tile, index) => {
            return (
              <GridListTile key={index} cols={1}>
                <Card>
                  <CardMedia image={tile.img} className="card-media"/>
                  <CardContent>
                    <Typography>{tile.title}</Typography>
                  </CardContent>
                </Card>
              </GridListTile>
            )
          })
        }
        </GridList>
        <div className="personalized-recommend-wrap">
          <Typography type="headline" className="headline">
            个性化推荐
            <span>根据你的口味生成，播放的收藏越多，推荐越准</span>
          </Typography>
          <Divider light/>
          <Grid container className="personalized-recommend-grid">
            {
              personalizedRecommends.map((item, index) => {
                return (
                  <Grid item key={index} xs={6}>
                    <Card className="personalized-recommend-card">
                      <CardMedia image={item.img} className="personalized-recommend-card-media"/>
                      <CardContent>
                        <p className="headline">{item.headline}</p>
                        <p className="subtitle">{item.subTitle}</p>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
        <div className="new-song-courier-wrap">
          <Typography type="headline" className="headline">
            新歌速递
            <Link to="" className="more">更多 &gt;</Link>
          </Typography>
          <Divider light/>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <PlayArrow />播放全部
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                newSongItems.map(song => {
                  return (
                    <TableRow key={song.id}>
                      <TableCell>
                        <div className="song-list-item">
                          <span className="title-wrap">
                            {song.title}
                            <KeyboardArrowRight className="keyboard-arrow-right" onClick={this.handleSongListPlayMenuOpen.bind(this)}/>
                            <Menu
                              open={this.state.status.songListPlayMenu}
                              onRequestClose={this.handleRequestClose.bind(this, song)}
                              anchorEl={this.state.status.anchorEl}
                            >
                              <MenuItem onClick={this.handleRequestClose.bind(this, song)}>播放</MenuItem>
                              <MenuItem onClick={this.handleRequestClose.bind(this, song)}>添加到播放列表</MenuItem>
                              <MenuItem onClick={this.handleRequestClose.bind(this, song)}>收藏</MenuItem>
                              <MenuItem onClick={this.handleRequestClose.bind(this, song)}>分享</MenuItem>
                              <MenuItem onClick={this.handleRequestClose.bind(this, song)}>复制链接</MenuItem>
                              <MenuItem onClick={this.handleRequestClose.bind(this, song)}>下载</MenuItem>
                            </Menu>
                          </span>
                          <span>
                            {song.author}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}
