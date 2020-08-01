import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({...acc, [comment.id]: comment}),
  {}
)

export default (commentsState = defaultComments, action) => {
  switch(action.type) {
    default:
      return commentsState
  }
}