import React, { Component } from 'react'
import { Menu, Carousel, Card, List, Button, Icon } from 'antd'
import { Link } from 'react-router-dom'
import {observer, inject} from 'mobx-react'
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
    const { match ,discovrMusicStore} = this.props
    console.log(discovrMusicStore.banners);
  }
  
  render() {
    const { match ,discovrMusicStore} = this.props
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
              discovrMusicStore.banners.map(item => (
                <img src={item.pic}/>
              ))
            }
          </Carousel>
        </Card>
        <Card title="热门精选" className={styles.hot}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <CardGrid key={item} className={styles.hotItem}>
                <Card
                  className={styles.hotItemCard}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title={`${item} title ...`} />
                </Card>
              </CardGrid>
            ))
          }
        </Card>
        <Card title="个性化推荐" className={styles.personality}>
          <List
            itemLayout="vertical"
            grid={{ gutter: 16, column: 2 }}
            dataSource={listData}
            renderItem={item => (
              <ListItem width={140} height={140} extra={<img src="http://p1.music.126.net/MzQ4LEgNhDBNHLo1Lbmbow==/5782331650592520.jpg?param=140y140" />}>
                <ListItemMeta title={item} description={item} />
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
              dataSource={songList}
              renderItem={(item, index) => (
                <ListItem>
                  <ListItemMeta title={(<span>{index + 1} {item.title}</span>)} />
                  <div>{item.single}</div>
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
