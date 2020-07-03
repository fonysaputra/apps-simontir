import { REGISTER } from './types'
import fetch from 'isomorphic-unfetch'

import { errorGlobal } from '../lib/errorHandling'

export const requestRegister = (data) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${process.env.IP_SERVER}/imers/sign_up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const getRes = await res.json()

      if (getRes.data) {
        localStorage.setItem('browserDefault', getRes.data.token)
        localStorage.setItem('browserName', getRes.data.imer.firstName)

        dispatch({ type: REGISTER, payload: getRes })
      } else {
        dispatch({
          type: REGISTER,
          payload: errorGlobal,
        })
      }
    } catch {
      dispatch({
        type: REGISTER,
        payload: errorGlobal,
      })
    }
  }
}
