import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_USER_PROFILE,
  fetchUserProfileInProgress,
  fetchUserProfileSuccess,
  fetchUserProfileFailed
} from '../redux/app/actions';

import API from '../api';

export function* fetchUserProfile() {
  try {
    yield put(fetchUserProfileInProgress());

    const result = yield call(API.fetchUserProfile);
    yield put(fetchUserProfileSuccess(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchUserProfileFailed());
  }
}

export default function* fetchUserProfileWatcher() {
  yield takeLatest(FETCH_USER_PROFILE, fetchUserProfile);
}
