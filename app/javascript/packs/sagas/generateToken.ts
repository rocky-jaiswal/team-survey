import { call, put, select, takeLatest } from 'redux-saga/effects';

import { GENERATE_TOKEN } from '../redux/app/actions';

import {
  generateTokenInProgress,
  generateTokenFailed,
  generateTokenSuccess
} from '../redux/app/actions';

import API from '../api';

export function* generateToken() {
  try {
    yield put(generateTokenInProgress());
    const state = yield select();

    yield call(API.generateToken, state.app.userEmail);
    yield put(generateTokenSuccess());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(generateTokenFailed());
  }
}

export default function* generateTokenWatcher() {
  yield takeLatest(GENERATE_TOKEN, generateToken);
}
