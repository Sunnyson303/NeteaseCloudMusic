import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Grid, Dialog} from 'material-ui'
import SideBar from '../Components/SideBar'
import Main from '../Components/Main'
import Header from '../Components/Header'
import PlayBar from '../Components/PlayBar'
import PlayDetailModal from '../Components/PlayDetailModal'
import Slide from 'material-ui/transitions/Slide';

import {BrowserRouter as Router} from 'react-router-dom'

import {openPlayDetailModal, closePlayDetailModal, playSong} from '../actions'

class AppContianer extends Component {
  
  componentDidMount() {
    this.props.playSong()
  }
  
  
  render() {
    const {status, closePlayDetailModal} = this.props
    return (
      <Router>
        <Grid container className="height-100">
          <Header></Header>
          <Grid container className="height-100">
            <Grid item xs={2} className="height-100">
              <SideBar></SideBar>
            </Grid> 
            <Grid item xs={10} className="height-100">
              <Main></Main>  
            </Grid> 
          </Grid>
          <PlayBar></PlayBar>

          <Dialog
            fullScreen
            open={status.playDetailModal}
            onRequestClose={closePlayDetailModal}
            transition={<Slide direction="up" />}
            className="c-play-detail-modal-wrap"
          >
              <PlayDetailModal />
          </Dialog>
        </Grid>
      </Router>
    )
  }
}

const mapStateToProps = (state, ownProps) => (state)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closePlayDetailModal: e => {
      dispatch(closePlayDetailModal())
    },
    playSong: e=> {
      dispatch(playSong(347230))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContianer)