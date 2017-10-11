import {index as songDetail} from './Epics/Song/detail'

export const OPEN_PLAY_DETAIL_MODAL = 'OPEN_PLAY_DETAIL_MODAL'
export const CLOSE_PLAY_DETAIL_MODAL = 'CLOSE_PLAY_DETAIL_MODAL'

function requestSong() {
  return {
    type: 'REQUEST_SONG'
  }
}

function receviceSong(song) {
  return {
    type: 'RECEIVE_SONG',
    song,
  }
}

export function fetchSong(id) {
  return dispatch => {
    dispatch(requestSong(id))
    return fetch(`/song/detail?ids=${id}`)
    .then(res => res.json()).then(json => dispatch(receviceSong(json)))
  }
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