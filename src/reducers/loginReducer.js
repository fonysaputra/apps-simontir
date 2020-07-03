import { LOGIN } from '../actions/types'

//const initialState = { payload: [] };

export default function (state = [], action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, state: action.payload, loading: false }

    default:
      return state
  }
}
