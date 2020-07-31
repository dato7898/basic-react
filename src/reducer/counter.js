import { INCREMENT } from '../constants'

export default (counterState = 0, action) => 
  action.type === INCREMENT
    ? counterState + 1
    : counterState
