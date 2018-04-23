import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_ALL_SURVEYS,
  getAllSurveysInProgress,
  getAllSurveysSuccess,
  getAllSurveysFailed
} from '../redux/app/actions';

import API from '../api';

export function* fetchAllSurveys() {
  try {
    yield put(getAllSurveysInProgress());

    const result = yield call(API.fetchAllSurveys);
    yield put(getAllSurveysSuccess(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(getAllSurveysFailed());
  }
}

export default function* fetchAllSurveysWatcher() {
  yield takeLatest(GET_ALL_SURVEYS, fetchAllSurveys);
}
