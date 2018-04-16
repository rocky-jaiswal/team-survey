import { call, put, takeLatest } from 'redux-saga/effects';

import {
  CREATE_SESSION,
  createSessionInProgress,
  createSessionSuccess,
  createSessionFailed
} from '../redux/app/actions';

import API from '../api';
import { ActionType } from '../constants/types';

export function* createSession(action: ActionType<string>) {
  try {
    yield put(createSessionInProgress());

    const result = yield call(API.createSession, action.payload);
    yield put(createSessionSuccess(result.data.jwt));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(createSessionFailed());
  }
}

export default function* createSessionWatcher() {
  yield takeLatest(CREATE_SESSION, createSession);
}
