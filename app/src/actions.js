export const  OPEN_PLAY_DETAIL_MODAL = 'OPEN_PLAY_DETAIL_MODAL'
export const  CLOSE_PLAY_DETAIL_MODAL = 'CLOSE_PLAY_DETAIL_MODAL'

function requestSong({id}) {
  return {
    type: 'REQUEST_SONG',
    id
  }
}
function receviceSong(song) {
  return {
    type: 'RECEIVE_SONG',
    song, 
  }
}

export function fetchSong(song) {
  return dispatch => {
    dispatch(requestSong(song))
    return fetch('http://')
      .then(res => res.json())
      .then(json => dispatch(receviceSong(json)))
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