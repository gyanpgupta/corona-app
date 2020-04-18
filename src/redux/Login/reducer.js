import { ON_AUTH_SUCCESS, ON_AUTH_FAILURE } from "./action";

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
    default:
      return state;
  }
};
