import React, { Component } from 'react'
import { Menu, Carousel, Card, List, Button, Icon, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import styles from './Index.less'

const MenuItem = Menu.Item
const ListItem = List.Item
const ListItemMeta = ListItem.Meta
const { Meta } = Card
const CardGrid = Card.Grid

@inject('discovrMusicStore')
@observer
export default class DiscovrMusic extends Component {

  componentDidMount() {
  }

  render() {
    const { match, discovrMusicStore: store } = this.props
    const listData = [1, 2, 3, 4]
    var songList = []
    for (let i = 0; i < 20; i++) {
      songList.push({
        title: `title - ${i}`,
        single: `single - ${i}`,
      })
    }
    return (
      <div className={styles.container}>
        <Menu mode="horizontal" className={styles.menu}>
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
        <Card>
          <Carousel autoplay className={styles.banenrList}>
            {
              store.banners.map(item => (
                <img src={item.pic} key={item.pic}/>
              ))
            }
          </Carousel>
        </Card>
        <Card title="热门精选" className={styles.hot}>
          <Row gutter={24}>
            {
              store.songMenus.slice(0,4).map(item => (
                <Col span={6} key={item.id}>
                    <Card
                    key={item.id}
                      className={styles.hotItemCard}
                      cover={<img alt="example" src={item.picUrl} />}
                    >
                      <Meta title={item.name} />
                    </Card>
                </Col>
              ))
            }
          </Row>
          <Row gutter={24}>
            {
              store.songMenus.slice(4,8).map(item => (
                <Col span={6} key={item.id}>
                    <Card
                    key={item.id}
                      className={styles.hotItemCard}
                      cover={<img alt="example" src={item.picUrl} />}
                    >
                      <Meta title={item.name} />
                    </Card>
                </Col>
              ))
            }
          </Row>
        </Card>
        <Card title="个性化推荐" className={styles.personality}>
          <List
            itemLayout="vertical"
            grid={{ gutter: 16, column: 2 }}
            dataSource={store.recommens}
            renderItem={item => (
              <ListItem width={140} height={140} extra={<img src={item.picUrl} width={200} />}>
                <ListItemMeta title={item.name} description={item.copywriter} />
              </ListItem>)}
          >
          </List>
        </Card>
        <Card title="新歌速递" extra={<Button>更多</Button>}>
          <Card
            title={<a href="javascript:;"><Icon type="play-circle-o" />播放全部</a>}
            type="innner"
          >
            <List
              size="small"
              dataSource={store.newSongs}
              renderItem={(item, index) => (
                <ListItem key={item.id}>
                  <ListItemMeta title={(<span>{item.name}</span>)} />
                  <div>{item.song.artists.map(i => i.name)}</div>
                </ListItem>
              )}
            >

            </List>
          </Card>
        </Card>
      </div>
    )
  }
}
