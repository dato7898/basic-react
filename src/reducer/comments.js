import { normalizedComments as defaultComments } from '../fixtures'

export default (commentsState = defaultComments, action) => {
  switch(action.type) {
    default:
      return commentsState
  }
}