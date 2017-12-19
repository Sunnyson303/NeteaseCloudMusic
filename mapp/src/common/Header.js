import React, { Component } from 'react'
import { Row, Col, Avatar, Input, Badge, Icon, Button } from 'antd'
import styles from './Header.less'

export default class Header extends Component {
  render() {
    return (
      <Row gutter={16} className={styles.container}>
        <Col span={3}>
          <div className={styles.logo}>网易云音乐</div>
        </Col>
        <Col span={5} className={styles.flip}>
          <div className={styles.flipIconWrap}>
            <Icon type="left-square-o" className={styles.flipIconItem} />
            <Icon type="right-square-o" className={styles.flipIconItem}  />
          </div>
          <div className={styles.search}>
            <Input defaultValue="搜索音乐、歌手、歌词、用户" />
          </div>
        </Col>
        <Col className={styles.userInfo}>
          <div className="">
            <Badge count={14}><Icon type="mail" /></Badge>
            <Icon type="setting" />
          </div>
          <div className="">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
          <Icon type="caret-down" />
        </Col>
      </Row>
    )
  }
}
