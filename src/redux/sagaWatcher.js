import { all, takeLatest } from "redux-saga/effects";
import { FETCH_CORONA_CASES_SUMMARY_REQUEST } from "./Dashboard/action";
import { ON_AUTH_REQUEST, ON_AUTH_LOGOUT_REQUEST } from "./Login/action";
import { fetchCoronaCasesSummarySaga } from "./Dashboard/saga";
import { onAuthRequestSaga, onAuthLogoutRequestSaga } from "./Login/saga";

export default function* sagaWatcher() {
  yield all([
    takeLatest(FETCH_CORONA_CASES_SUMMARY_REQUEST, fetchCoronaCasesSummarySaga),
    takeLatest(ON_AUTH_REQUEST, onAuthRequestSaga),
    takeLatest(ON_AUTH_LOGOUT_REQUEST, onAuthLogoutRequestSaga),
  ]);
}
