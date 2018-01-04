import request from './request'
import qs from 'querystring'

export function fetchBanners(payload) {
  return request(`/banner`)
}
export function fetchSongMenus(payload) {
  return request(`/personalized`)
}
export function fetchRecommends(payload) {
  return request(`/program/recommend`)
}
export function fetchNewSongs(payload) {
  return request(`/personalized/newsong`)
}
