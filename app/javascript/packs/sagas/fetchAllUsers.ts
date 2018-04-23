import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_ALL_USERS,
  getAllUsersInProgress,
  getAllUsersFailed,
  getAllUsersSuccess
} from '../redux/app/actions';

import API from '../api';

export function* fetchAllUsers() {
  try {
    yield put(getAllUsersInProgress());

    const result = yield call(API.fetchAllUsers);
    yield put(getAllUsersSuccess(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(getAllUsersFailed());
  }
}

export default function* fetchAllUsersWatcher() {
  yield takeLatest(GET_ALL_USERS, fetchAllUsers);
}
