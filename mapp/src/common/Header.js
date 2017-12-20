import React, { Component } from 'react'
import { Row, Col, Avatar, Input, Badge, Icon, Button,Popover } from 'antd'
import styles from './Header.less'
import UserInfo from '../components/UserInfo'


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
            <Icon type="right-square-o" className={styles.flipIconItem} />
          </div>
          <div className={styles.search}>
            <Input defaultValue="搜索音乐、歌手、歌词、用户" />
          </div>
        </Col>
        <Col className={styles.userInfo}>
          <div className={styles.notification}>
            <Badge count={14} className={styles.iconBadge}><Icon type="mail" className={styles.iconEmail} /></Badge>
            <Icon type="setting" className={styles.iconSetting} />
          </div>
          <div className={styles.avatarWrap}>
          <Popover placement="bottom" content={<UserInfo></UserInfo>} trigger="click">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Icon type="caret-down" className={styles.iconDown}/>
          </Popover>
          </div>
        </Col>
      </Row>
    )
  }
}
