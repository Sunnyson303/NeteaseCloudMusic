import { observable, computed, action } from 'mobx'
import {fetchBanners} from '../services/api'

class DiscovrMusicStore{
  @observable banners = [];
  constructor(props) {
    this.fetchBanners()
  }
  
  @action 
  fetchBanners() {
    fetchBanners().then(json => {
      this.banners = json.banners
    })
  }
}

const store = new DiscovrMusicStore()
export default store