import { observable, computed, action } from 'mobx'
import { fetchBanners, fetchSongMenus, fetchRecommends, fetchNewSongs } from '../services/api'

class DiscovrMusicStore {
  @observable banners = [];
  @observable songMenus = [];
  @observable recommens = [{
    id: 1,
    name: '每日歌曲推荐',
    copywriter: '根据你的口味生成，每天更新!',
    picUrl: "http://p1.music.126.net/GoU0psq_83Cgbfs4VKvS6Q==/109951163097836122.jpg"
  }];
  @observable newSongs = [];

  constructor(props) {
    this.fetchData()
  }

  @action
  async fetchData() {
    const { banners } = await fetchBanners()
    this.banners = banners
    const { result:songMenus } = await fetchSongMenus()
    this.songMenus = songMenus.slice(0, 8)
    this.recommens = [...songMenus.slice(8, 12)]
    const { result:newSongs } = await fetchNewSongs()
    this.newSongs = newSongs
  }
}

const store = new DiscovrMusicStore()
export default store