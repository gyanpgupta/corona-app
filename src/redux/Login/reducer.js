import {
  ON_AUTH_SUCCESS,
  ON_AUTH_FAILURE,
  ON_AUTH_LOGOUT_SUCCESS,
} from "./action";

const initialState = {
  info: JSON.parse(localStorage.getItem("auth")),
  isLoggedIn: !!localStorage.getItem("auth"),
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ON_AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case ON_AUTH_FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: false,
      };
    case ON_AUTH_LOGOUT_SUCCESS:
      return {
        ...initialState,
        ...action.payload,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
