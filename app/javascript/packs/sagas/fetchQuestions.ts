import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchQuestionsInProgress,
  fetchQuestionsSuccess,
  fetchQuestionsFailed,
  FETCH_QUESTIONS
} from '../redux/app/actions';

import API from '../api';

export function* fetchQuestions() {
  try {
    yield put(fetchQuestionsInProgress());

    const result = yield call(API.fetchQuestions);
    yield put(fetchQuestionsSuccess(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchQuestionsFailed());
  }
}

export default function* fetchQuestionsWatcher() {
  yield takeLatest(FETCH_QUESTIONS, fetchQuestions);
}
