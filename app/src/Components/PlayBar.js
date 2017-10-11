import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  Grid,
  LinearProgress,
  Avatar
} from 'material-ui';
import {
  SkipPrevious,
  SkipNext,
  PauseCircleFilled,
  PlayArrow,
  VolumeUp,
  VolumeOff,
  Repeat,
  RepeatOne,
  Shuffle,
  LibraryBooks,
  QueueMusic,
  
} from 'material-ui-icons'

import { connect } from 'react-redux'
import {togglePlayBtn} from '../actions' 

class PlayBar extends Component {
  static propTypes = {

  }

  state = {
    status: {
      progress: 49,
      volume: 60
    }
  }

  render() {
    console.log( this.props);
    const {status, togglePlayBtn} = this.props
    var playBtn = status.playBtn ? <span onClick={togglePlayBtn.bind(this, false)}>播放</span> : <span onClick={togglePlayBtn.bind(this, true)}>暂停</span>
    return (
      <AppBar className="c-playbar">
        <Toolbar>
          <Grid container>
            <Grid item xs={2} className="play-operations">
              <SkipPrevious color="error"/>
              <PlayArrow color="error" />
              {playBtn}
              <SkipNext color="error" />
            </Grid>
            <Grid item xs={10}>
              <Grid container className="progress-operations">
                <Grid item xs={7}>
                  <LinearProgress color="accent" mode="determinate" value={this.state.status.progress} />
                </Grid>
                <Grid item xs={1}>
                  <div className="progress-time">02:33/03:55</div>
                </Grid>
                <Grid item xs={2} className="progress-volume">
                  <VolumeUp />
                  <LinearProgress color="accent" mode="determinate" className="volume-linear" value={this.state.status.volume} />
                </Grid>
                <Grid item xs={2} className="repeat-operations">
                  <Repeat className="icon-repeat"/>
                  <LibraryBooks className="icon-lyric"/>
                  <div className="queue-music-wrap">
                    <QueueMusic className="icon-queue-music"/>
                    <Avatar>504</Avatar>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state, ownProps) => state

const mapDispatchToProps = dispatch => {
  return {
    togglePlayBtn: e => {
      dispatch(togglePlayBtn(e))
    },
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(PlayBar)