export default store => next => action => {
  if (!action.generateId) return next(action)
  next({
    ...action,
    randomId: (new Date() + Math.random()).toString()
  })
}