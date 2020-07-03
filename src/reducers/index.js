import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'

export default combineReducers({
  counterReducer,
  loginReducer,
  registerReducer,
})
