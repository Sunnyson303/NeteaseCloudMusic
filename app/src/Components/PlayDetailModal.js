import React, { Component } from 'react'
import {Grid, Avatar, Divider, Button, Typography, Paper, TextField, Card, CardMedia, CardContent} from 'material-ui';
import {Star, Collections, Share, FullscreenExit} from 'material-ui-icons'

import { connect } from 'react-redux'

import {closePlayDetailModal} from '../actions'


const lyric = `
  Hello, hello 
  嘿 在吗
  Can you hear me as I scream your name? 
  当我呼喊你名你是否能够听清
  Hello, hello 
  嘿 你好
  Do you meet me before I fade away? 
  在我消失之前我们能否相遇
  
  Is this a place that I call home 
  这是否是能让我称作家的地方
  To find what I've become? 
  它能否让我找回自我
  Walk along the path unknown 
  沿着未知的路一直走
  We live, we love, we lie 
  我们活着 我们爱了 我们谎言相向着
  
  Deep in the dark I don’t need the light 
  深入那黑暗之中 我不需要任何光火
  There is a ghost inside me 
  我心内有个魂灵
  It all belongs to the other side 
  它总属于另一面的我
  We live, we love, we lie 
  我们活着 我们爱了 我们谎言相向着
  
  Hello, hello 
  嘿 你好
  Nice to meet you 
  很高兴与你相遇
  Voices inside my head 
  在我脑海里的声音
  Hello, hello 
  嘿 在吗
  I believe you 
  我无比相信你
  How can I forget? 
  我又怎能忘记
  
  Is this a place that I call home 
  这是否是能让我称作家的地方
  To find what I've become? 
  它能否让我找回自我
  Walk along the path unknown 
  沿着未知的路一直走
  We live, we love, we lie 
  我们活着 我们爱了 我们谎言相向着
  
  Deep in the dark I don’t need the light 
  深入那黑暗之中 我不需要任何光火
  There is a ghost inside me 
  我心内有个魂灵
  It all belongs to the other side 
  它总属于另一面的我
  We live, we love, we lie 
  我们活着 我们爱了 我们谎言相向着
  
  We live, we love, we lie 
  我们活着 我们爱了 我们谎言相向着
  We live, we love, we lie 
  我们活着 我们爱了 我们谎言相向着
`
const comments = [
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    userName: '雾与晨的杂货店',
    content: 'Alan walker 原来的这首《The Spectre》是首纯音乐，没想到融入男声之后居然和《Faded》融入女声有异曲同工之妙。好听',
    praise: 134,
    time: Date.now()
  },
]
const includes = [
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '不让你通宵的电音不是好毒品',
    counts: 23434
  }
]
const relativeSongs = [
  {
    title: '......',
    author: '......'
  }
]
const likesPersons = [
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    author: 'ssaaaa',
    sex: 'man',
    time: Date.now()
  }
]
class PlayDetailModal extends Component {
  
  render() {
    const {closePlayDetailModal, songDetail} = this.props
    return (
      <div className="c-play-detail-modal">
        <Grid container>
          <Grid item xs={6} className="left">
            <Avatar className="song-avatar" src="//material-ui-1dab0.firebaseapp.com/static/images/uxceo-128.jpg"></Avatar>
            <div className="options">
              <Button rasied><Star />喜欢</Button>
              <Button rasied><Collections />收藏</Button>
              <Button rasied><Share />分享</Button>
            </div>
          </Grid>
          <Grid item xs={6} className="right">
            <FullscreenExit className="fullscreen-exit" onClick={closePlayDetailModal}/>
            <Typography type="headline">
              The Spectre
              <icon>MV</icon>
              <icon>128k</icon>
            </Typography>
            <div className="info">
              <span>
                <label htmlFor="" className="album">专辑</label>
                <a href="">The Spectre</a>
              </span>
              <span>
                <label htmlFor="">歌手</label>
                <a href="">Alan Walker</a>
              </span>
              <span>
                <label htmlFor="">来源</label>
                <a href="">我喜欢的音乐</a>
              </span>
            </div>
            <Divider />
            <div className="lyric">
              {lyric}
            </div>
          </Grid>
        </Grid>
        <Grid container className="bottom">
          <Grid item xs={8} className="comments">
            <Typography type="headline">
              听友评论
              <span className="comment-counts">已有344条评论</span>
            </Typography>
            <Divider />
            <Paper className="submit-area">
              <TextField className="content"/>
              <div className="comment-submit">
                <span>@</span>
                <Button raised={true}>评论</Button>
              </div>
            </Paper>
            <div className="brilliant">
              <Typography type="subheading" className="subheading">精彩评论</Typography>
              <Divider />
              {
                comments.map(comment => {
                  return (
                    <Card className="comment-card">
                      <CardMedia image={comment.img} className="avator"/>
                      <CardContent>
                        <p>
                          <a href="">{comment.userName}</a>
                          {comment.content}
                        </p>
                        <p>
                          <span>{comment.title}</span>
                          <span><Star />{comment.praise} | 回复</span>
                        </p>
                      </CardContent>
                    </Card>
                  )
                })
              }
            </div>
            <div className="newest-comments">
              <Typography type="subheading" className="subheading">最新评论(342432)</Typography>
              {
                comments.map(comment => {
                  return (
                    <Card className="">
                      <CardMedia image={comment.img}/>
                      <CardContent>
                        <p>
                          <a href="">{comment.userName}</a>
                          {comment.content}
                        </p>
                        <p>
                          <span>{comment.title}</span>
                          <span><Star />{comment.praise} | 回复</span>
                        </p>
                      </CardContent>
                    </Card>
                  )
                })
              }
            </div>
          </Grid>
          <Grid item xs={4} className="relatives">
            <div className="m-include-song-list">
              <Typography type="subheading">包含这首歌的歌单</Typography>
              {
                includes.map(item => {
                  return (
                    <Card>
                      <CardMedia image={item.img}/>
                      <CardContent>
                        <p>{item.title}</p>
                        <p>播放: {item.counts}万</p>
                      </CardContent>
                    </Card>
                  )
                })
              }
            </div>
            <div className="m-relative-songs">
              <Typography type="subheading">相似歌曲</Typography>
              <Divider />
              {
                includes.map(item => {
                  return (
                    <div>
                      <Star />
                      {item.title}
                      {item.author}
                    </div>
                  )
                })
              }
            </div>
            <div className="m-list-songs">
              <Typography type="subheading">喜欢这首歌的人</Typography>
              <Divider />
              {
                includes.map(item => {
                  return (
                    <Card>
                      <CardMedia img={item.img}/>
                      <CardContent>
                        <p>{item.title}</p>
                        <p>播放: {item.counts}万</p>
                      </CardContent>
                    </Card>
                  )
                })
              }
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => (state)
const mapDispatchToProps = dispatch => {
  return {
    closePlayDetailModal: e => {
      dispatch(closePlayDetailModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayDetailModal)

