import { call, put } from 'redux-saga/effects';
import { fetchCoronaCasesSummarySuccess, fetchCoronaCasesSummaryFailure } from './action';
import * as API from '../../helpers/api';

export function* fetchCoronaCasesSummarySaga() {
  try {
    const { data } = yield call(API.fetchFromApi, "/summary");
    yield put(fetchCoronaCasesSummarySuccess(data));
  } catch(error) {
    console.log("Error...", error);
    yield put(fetchCoronaCasesSummaryFailure(error));
  }
};
