import { all, takeLatest } from 'redux-saga/effects';
import { FETCH_CORONA_CASES_SUMMARY_REQUEST } from './Details/action';
import { ON_AUTH_REQUEST } from './Login/action';
import { fetchCoronaCasesSummarySaga } from './Details/saga';
import { onAuthRequestSaga } from './Login/saga';

export default function* sagaWatcher() {
  yield all([
    takeLatest(FETCH_CORONA_CASES_SUMMARY_REQUEST, fetchCoronaCasesSummarySaga),
    takeLatest(ON_AUTH_REQUEST, onAuthRequestSaga),
  ]);
};
