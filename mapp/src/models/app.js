import { observable, computed, action } from 'mobx'
import {fetchBanners} from '../services/api'

export default class Banner{
  @observable banners = [];
  @action 
  fetchBanners() {
    fetchBanners().then(json => {
      console.log(this);
      this.bannerlist = json.banners
    })
  }
}