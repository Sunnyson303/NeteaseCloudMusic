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

export default class PlayBar extends Component {
  static propTypes = {

  }
  constructor() {
    super()
    this.state = {
      status: {
        progress: 49,
        volume: 60
      }
    }
  }

  render() {
    return (
      <AppBar className="c-playbar">
        <Toolbar>
          <Grid container>
            <Grid item xs={2} className="play-operations">
              <SkipPrevious color="error"/>
              <PlayArrow color="error" />
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