import React, { Component } from 'react'
import { Card, Avatar, List, Icon } from 'antd'

export default class UserInfo extends Component {
  render() {
    return (
      <Card
        title={(<div><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />Sunnyson303</div>)}
      >
        <List size="small">
          <List.Item>
            <List.Item.Meta avatar={<Icon type="star" />} title="会员中心" />
            <div>
              <Icon type="right" />
            </div>
          </List.Item>
        </List>
      </Card>
    )
  }
}
