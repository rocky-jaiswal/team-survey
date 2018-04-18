import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  SUBMIT_SURVEY,
  submitSurveyInProgress,
  submitSurveySuccess,
  submitSurveyFailed
} from '../redux/app/actions';
import { RootStateType } from '../constants/types';

import API from '../api';

export function* submitSurvey() {
  try {
    yield put(submitSurveyInProgress());
    const state: RootStateType = yield select();

    yield call(API.submitSurvey, state.app.surveyId, state.app.responses);
    yield put(submitSurveySuccess());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(submitSurveyFailed());
  }
}

export default function* submitSurveyWatcher() {
  yield takeLatest(SUBMIT_SURVEY, submitSurvey);
}
