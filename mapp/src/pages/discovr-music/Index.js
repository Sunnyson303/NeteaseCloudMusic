import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

export default class DiscovrMusic extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <Menu mode="horizontal">
          {
            [
              {
                name: '推荐',
                path: 'recommend'
              }, {
                name: '排行版',
                path: 'charts'
              }, {
                name: '歌单',
                path: 'playlist'
              }, {
                name: '主播电台',
                path: 'radio'
              }, {
                name: '最新音乐',
                path: 'newest'
              }
            ].map(item => (<MenuItem key={item.name}>
              <Link to={`${match.url}/${item.path}`}>{item.name}</Link>
            </MenuItem>))
          }
        </Menu>
      </div>
    )
  }
}
