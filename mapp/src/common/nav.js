
import DiscovrMusic from '../pages/discovr-music/Index'
const navData = [
  {
    name: '推荐',
    path: 'recommend',
    children: [
      {
        path: 'discovr-music',
        conponent: DiscovrMusic,
        name: '发现音乐',
        icon: 'music'
      },
      {
        path: 'profile-fm',
        conponent: '',
        name: '私人FM',
        icon: 'music'
      },
      {
        path: 'mv',
        conponent: '',
        name: 'MV',
        icon: 'music'
      },
      {
        path: 'friends',
        conponent: '',
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
        conponent: '',
        name: 'iTunes音乐',
        icon: 'music'
      },
      {
        path: 'downloads',
        conponent: '',
        name: '下载的音乐',
        icon: 'music'
      },
      {
        path: 'my-singers',
        conponent: '',
        name: '我的歌手',
        icon: 'music'
      },
      {
        path: 'my-mv',
        conponent: '',
        name: '我的MV',
        icon: 'music'
      },
      {
        path: 'my-radio',
        conponent: '',
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
        conponent: '',
        name: '我喜欢的音乐',
        icon: 'music'
      },
      {
        path: ':item',
        conponent: '',
        name: '我喜欢的音乐',
        icon: 'music'
      },
    ]
  }
]

export default navData