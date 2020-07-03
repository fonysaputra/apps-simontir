import { REGISTER } from '../actions/types'

//const initialState = { payload: [] };

export default function (state = [], action) {
  switch (action.type) {
    case REGISTER:
      return { ...state, state: action.payload }

    default:
      return state
  }
}
