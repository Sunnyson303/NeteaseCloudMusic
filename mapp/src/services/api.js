import request from './request'
import qs from 'querystring'

export function fetchBanners(payload) {
  return request(`/banner`)
}
