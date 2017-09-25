import {
  combineReducers
} from 'redux'

import {
  CLOSE_PLAY_DETAIL_MODAL,
  OPEN_PLAY_DETAIL_MODAL
} from './actions'

export const status = (state = {
  playDetailModal: true
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
const rootReducer = combineReducers({
  status
})

export default rootReducer