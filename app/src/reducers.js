import {
  combineReducers
} from 'redux'

import {
  CLOSE_PLAY_DETAIL_MODAL,
  OPEN_PLAY_DETAIL_MODAL
} from './actions'

export const status = (state = {
  playDetailModal: false
}, action) => {
  switch (action.type) {
    case CLOSE_PLAY_DETAIL_MODAL:
    case OPEN_PLAY_DETAIL_MODAL:
      return Object.assign({}, state, {
        playDetailModal: action.value
      })
    default:
      return state
  }
}

export const songDetail = (state = {
  isFetching: false,
  item: {}
}, action) => {
  switch (action.type) {
    case 'REQUEST_SONG':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_SONG':
      return Object.assign({}, state, {
        item: action.song,
        isFetching: false
      })
    default:
      return state
  }
}
const rootReducer = combineReducers({
  status,
  songDetail
})

export default rootReducer