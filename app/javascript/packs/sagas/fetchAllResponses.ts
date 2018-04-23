import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  getAllResponsesInProgress,
  getAllResponsesSuccess,
  getAllResponsesFailed,
  GET_ALL_RESPONSES
} from '../redux/app/actions';

import API from '../api';
import { RootStateType } from '../constants/types';

export function* fetchAllResponses() {
  try {
    yield put(getAllResponsesInProgress());

    const state: RootStateType = yield select();
    const result = yield call(API.fetchAllResponses, state.app.admin.selectedSurvey);
    yield put(getAllResponsesSuccess(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(getAllResponsesFailed());
  }
}

export default function* fetchAllResponsesWatcher() {
  yield takeLatest(GET_ALL_RESPONSES, fetchAllResponses);
}
