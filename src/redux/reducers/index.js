import { INCREMENT } from '../constants/action-types'

const initialState = {
  number: 0
}

export const rootReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return Object.assign({}, state, { number: state.number + action.payload })
  }
  return state
}
