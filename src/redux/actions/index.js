import { INCREMENT } from '../constants/action-types'

export const increment = (payload) => {
  return { type: INCREMENT, payload }
}
