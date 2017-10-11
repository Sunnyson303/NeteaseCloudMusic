import {
  index as songDetail
} from './Epics/Song/detail'

export const OPEN_PLAY_DETAIL_MODAL = 'OPEN_PLAY_DETAIL_MODAL'
export const CLOSE_PLAY_DETAIL_MODAL = 'CLOSE_PLAY_DETAIL_MODAL'

export const fetchLoading = (payload) => ({
  type: 'FETCH_LOADING',
  payload
})

export const togglePlayBtn = payload => ({
  type: 'TOGGLE_PLAY_BTN',
  payload
})

export const playSong = id => {
  return dispatch => {
    dispatch(togglePlayBtn(true))
    dispatch(fetchLoading(true))
    fetchSong(id).then(json => {
      dispatch(fetchLoading(false))
    })
  }
}

export function fetchSong(id) {
  return fetch(`/song/detail?ids=${id}`).then(res => res.json())
}

export function openPlayDetailModal() {
  return {
    type: 'OPEN_PLAY_DETAIL_MODAL',
    value: true
  }
}
export function closePlayDetailModal() {
  return {
    type: 'CLOSE_PLAY_DETAIL_MODAL',
    value: false
  }
}