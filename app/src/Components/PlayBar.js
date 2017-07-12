import React, { Component } from 'react';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Slider from 'material-ui/Slider';


class PlayBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});
  render() {
    return (
      <div className="playbar fixed bottom row">
        <div className="bottons">
          <i className="material-icons">skip_previous</i>
          <i className="material-icons">play_arrow</i>
          <i className="material-icons">skip_next</i>
        </div>
        <div className="progress-bar">
          <Slider defaultValue={0.5} className="slider" style={{width: '80%'}}/>
          <div className="progress-time">
            <span className="current">01:39</span>
            <span className="total">04:00</span>
          </div>
        </div>
        <div className="volume">
          <i className="material-icons">skip_next</i>
          <Slider defaultValue={0.1} style={{width: '70%'}}/>
        </div>
      </div>
    );
  }
}

PlayBar.propTypes = {

};

export default PlayBar;