export const FETCH_CORONA_CASES_SUMMARY_REQUEST =
  "FETCH_CORONA_CASES_SUMMARY_REQUEST";
export const FETCH_CORONA_CASES_SUMMARY_SUCCESS =
  "FETCH_CORONA_CASES_SUMMARY_SUCCESS";
export const FETCH_CORONA_CASES_SUMMARY_FAILURE =
  "FETCH_CORONA_CASES_SUMMARY_FAILURE";

export const fetchCoronaCasesSummaryRequest = () => ({
  type: FETCH_CORONA_CASES_SUMMARY_REQUEST,
});

export const fetchCoronaCasesSummarySuccess = (payload) => ({
  type: FETCH_CORONA_CASES_SUMMARY_SUCCESS,
  payload,
});

export const fetchCoronaCasesSummaryFailure = (payload) => ({
  type: FETCH_CORONA_CASES_SUMMARY_FAILURE,
  payload,
});
