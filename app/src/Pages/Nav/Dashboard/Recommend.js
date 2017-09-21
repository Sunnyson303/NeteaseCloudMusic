import React, { Component } from 'react'

import {Card, CardMedia, CardContent, Typography, Divider} from 'material-ui';

import { GridList, GridListTile } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader'

const items = [
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪',
    counts: 278,
  },
  {
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪'
  },{
    img: '//material-ui-1dab0.firebaseapp.com/static/images/grid-list/morning.jpg',
    title: '这波节奏很强很浪'
  },
]
export default class Recommend extends Component {
  
  render() {
    return (
      <div className="page-dashboard-recommend">
        <Subheader>热门精选</Subheader>
        <Divider light/>
        <GridList cols={4} cellHeight={260} className="hot-collection">
        {
          items.map((tile, index) => {
            return (
              <GridListTile key={index} cols={1}>
                <Card>
                  <CardMedia image={tile.img} className="card-media"/>
                  <CardContent>
                    <Typography>{tile.title}</Typography>
                  </CardContent>
                </Card>
              </GridListTile>
            )
          })
        }
        </GridList>
      </div>
    )
  }
}
