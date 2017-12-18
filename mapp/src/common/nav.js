
import DiscovrMusic from '../pages/discovr-music/Index'
const navData = [
  {
    name: '推荐',
    path: 'recommend',
    children: [
      {
        path: 'discovr-music',
        component: DiscovrMusic,
        name: '发现音乐',
        icon: 'music'
      },
      {
        path: 'profile-fm',
        component: '',
        name: '私人FM',
        icon: 'music'
      },
      {
        path: 'mv',
        component: '',
        name: 'MV',
        icon: 'music'
      },
      {
        path: 'friends',
        component: '',
        name: '朋友',
        icon: 'music'
      },
      
    ]
  },
  {
    name: '我的音乐',
    path: '/my-music',
    children: [
      {
        path: 'itunes',
        component: '',
        name: 'iTunes音乐',
        icon: 'music'
      },
      {
        path: 'downloads',
        component: '',
        name: '下载的音乐',
        icon: 'music'
      },
      {
        path: 'my-singers',
        component: '',
        name: '我的歌手',
        icon: 'music'
      },
      {
        path: 'my-mv',
        component: '',
        name: '我的MV',
        icon: 'music'
      },
      {
        path: 'my-radio',
        component: '',
        name: '我的电台',
        icon: 'music'
      },
    ]
  }, {
    name: '创建的歌单',
    path: '/song-menu',
    children: [
      {
        path: 'stared-music',
        component: '',
        name: '我喜欢的音乐',
        icon: 'music'
      },
      {
        path: ':item',
        component: '',
        name: '我喜欢的音乐',
        icon: 'music'
      },
    ]
  }
]

export default navData