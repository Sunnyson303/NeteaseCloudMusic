import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

class SideBar extends Component {
  render() {
    return (
      <div id="side-bar" className="col-md-3">
        <List>
          <Subheader>推荐</Subheader>
          <ListItem primaryText="发现音乐" leftIcon={<ContentInbox />} />
          <ListItem primaryText="私人FM" leftIcon={<ContentInbox />}/>
          <ListItem primaryText="MV" leftIcon={<ContentInbox />}/>
          <ListItem primaryText="朋友" leftIcon={<ContentInbox />}/>
        </List>
        <List>
          <Subheader>我的音乐</Subheader>
          <ListItem primaryText="iTunes音乐" leftIcon={<ContentInbox />} />
          <ListItem primaryText="下载的音乐" leftIcon={<ContentInbox />}/>
          <ListItem primaryText="我的歌手" leftIcon={<ContentInbox />}/>
          <ListItem primaryText="我的MV" leftIcon={<ContentInbox />}/>
          <ListItem primaryText="我的电台" leftIcon={<ContentInbox />}/>
        </List>
        <List>
          <Subheader>创建的歌单</Subheader>
          <ListItem primaryText="我喜欢的音乐" leftIcon={<ContentInbox />} />
        </List>
        <List>
          <Subheader>收藏的歌单</Subheader>
          <ListItem primaryText="生命不息" leftIcon={<ContentInbox />} />
        </List>
        <Card>
          <CardHeader 
            title="演员" 
            subtitle="薛之谦" 
            showExpandableButton={true}/>
        </Card>
      </div>
    );
  }
}

SideBar.propTypes = {

};

export default SideBar;