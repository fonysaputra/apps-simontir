import { LOGIN } from "./types";
import fetch from "isomorphic-unfetch";

import { errorGlobal } from "../lib/errorHandling";

export const requestLogin = (data) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${process.env.IP_SERVER}/imers/sign_in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const getRes = await res.json();

      if (getRes.data) {
        localStorage.setItem("browserDefault", getRes.data.token);
        localStorage.setItem("browserName", getRes.data.imer.firstName);
        dispatch({ type: LOGIN, payload: getRes });
      } else {
        dispatch({
          type: LOGIN,
          payload: errorGlobal,
        });
      }
    } catch {
      dispatch({
        type: LOGIN,
        payload: errorGlobal,
      });
    }
  };
};
