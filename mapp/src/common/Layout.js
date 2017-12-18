import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Link, Route } from 'react-router-dom'
import './Layout.less'
import { ContainerQuery } from 'react-container-query';
import { debounce } from 'lodash'
import navData from './nav'
import PlayBar from './PlayBar'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const { Sider, Content, Footer, Header } = Layout

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

export default class App extends Component {
  state = {

  }
  componentDidMount() {
    window.addEventListener('resize', debounce(this.setContentHeight, 300))
    this.setContentHeight()
  }
  setContentHeight = () => {
    var contentHeight = window.innerHeight
    contentHeight = contentHeight - 64 - 69
    this.setState({
      contentHeight
    })

  }
  render() {
    const { contentHeight } = this.state
    const layout = (<Layout>
      <Header></Header>
      <Content>
        <Layout>
          <Sider className="sider"  style={{ height: contentHeight }}>
            <Menu mode="inline" defaultOpenKeys={['0', '1', '2']}>
              {
                navData.map((route, index) => (
                  <SubMenu key={index} title={route.name} disabled>
                    {
                      route.children.map(child => (
                        <MenuItem key={child.path}>
                          <Link to={`/${route.path}/${child.path}`}>
                            {child.name}
                          </Link>
                        </MenuItem>
                      ))
                    }
                  </SubMenu>
                ))
              }
            </Menu>
          </Sider>
          <Content style={{ minHeight: contentHeight }}>
            content
          {
              navData.map(route => (
                <Route path={route.path} key={route.path} render={props => {
                  return  route.children.map(sub => (
                      <Route path={`/${route.path}/${sub.path}`} {...props} key={sub.path} component={sub.component || null}/>
                    ))
                }
                } />
              ))
            }
          </Content>
        </Layout>
      </Content>
      <Footer>
        <PlayBar />
      </Footer>
    </Layout>)
    return (
      <ContainerQuery query={query}>
        {params => (<div>{layout}</div>)}
      </ContainerQuery>
    )
  }
}
