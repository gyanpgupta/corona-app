import { FETCH_CORONA_CASES_SUMMARY_SUCCESS } from "./action";

export const dashboard = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CORONA_CASES_SUMMARY_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
