import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import Recommend from './Dashboard/Recommend'
import RankList from './Dashboard/RankList'
import SongListMenu from './Dashboard/SongListMenu'
import BroadcasterList from './Dashboard/BroadcasterList'
import NewestMusic from './Dashboard/NewestMusic'

const nav = {
  Recommend: '推荐',
  RankList: '排行榜',
  SongListMenu: '歌单',
  BroadcasterList: '主播电台',
  NewestMusic: '最新音乐',
}
const Dashboard = ({match}) => {
  return (
    <div className="page-dashboard">
      <div className="nav-title">
        {
          Object.keys(nav).map(key => {
            return <NavLink to={`${match.url}/${key}`} activeClassName="active">{nav[key]}</NavLink>
          })
        }
      </div>
      <Route path={`${match.url}/Recommend`} component={Recommend}/>
      <Route path={`${match.url}/RankList`} component={RankList}/>
      <Route path={`${match.url}/SongListMenu`} component={SongListMenu}/>
      <Route path={`${match.url}/BroadcasterList`} component={BroadcasterList}/>
      <Route path={`${match.url}/NewestMusic`} component={NewestMusic}/>
      
    </div>
  )
}

export default Dashboard