import * as Immutable from 'seamless-immutable';

import { ActionType, AppStateType } from '../../constants/types';
import {
  SET_USER_EMAIL,
  GENERATE_TOKEN_INPROGRESS,
  GENERATE_TOKEN_FAILED,
  GENERATE_TOKEN_SUCCESS,
  CREATE_SESSION_INPROGRESS,
  CREATE_SESSION_FAILED,
  CREATE_SESSION_SUCCESS,
  FETCH_QUESTIONS_INPROGRESS,
  FETCH_QUESTIONS_FAILED,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_USER_PROFILE_INPROGRESS,
  FETCH_USER_PROFILE_FAILED,
  FETCH_USER_PROFILE_SUCCESS
} from './actions';

const iState: AppStateType = {
  locale: 'en',
  loading: false,
  error: null,
  tokenGenerated: false,
  loggedIn: false,
  userEmail: null,
  userRole: 'user',
  questions: []
};

export const initialState = Immutable.from(iState);

// tslint:disable-next-line:no-any
const appReducer = (state = initialState, action: ActionType<any>): AppStateType => {
  switch (action.type) {

    case GENERATE_TOKEN_INPROGRESS:
      return state
        .set('loading', true);

    case GENERATE_TOKEN_FAILED:
      return state
        .set('loading', false)
        .set('error', GENERATE_TOKEN_FAILED);

    case GENERATE_TOKEN_SUCCESS:
      return state
        .set('loading', false)
        .set('error', state.error === GENERATE_TOKEN_FAILED ? null : state.error)
        .set('tokenGenerated', true);

    case SET_USER_EMAIL:
      return state
        .set('userEmail', action.payload);

    case CREATE_SESSION_INPROGRESS:
      return state
        .set('loading', true);

    case CREATE_SESSION_FAILED:
      return state
        .set('loading', false)
        .set('error', CREATE_SESSION_FAILED);

    case CREATE_SESSION_SUCCESS:
      sessionStorage.setItem('jwt', action.payload);
      return state
        .set('loading', false)
        .set('error', state.error === CREATE_SESSION_FAILED ? null : state.error)
        .set('loggedIn', true);

    case FETCH_QUESTIONS_INPROGRESS:
      return state
        .set('loading', true);

    case FETCH_QUESTIONS_FAILED:
      return state
        .set('loading', false)
        .set('error', FETCH_QUESTIONS_FAILED);

    case FETCH_QUESTIONS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', state.error === FETCH_QUESTIONS_FAILED ? null : state.error)
        .set('questions', action.payload);

    case FETCH_USER_PROFILE_INPROGRESS:
      return state
        .set('loading', true);

    case FETCH_USER_PROFILE_FAILED:
      return state
        .set('loading', false)
        .set('error', FETCH_USER_PROFILE_FAILED);

    case FETCH_USER_PROFILE_SUCCESS:
      return state
        .set('loading', false)
        .set('error', state.error === FETCH_USER_PROFILE_FAILED ? null : state.error)
        .set('userEmail', action.payload.email)
        .set('userRole', action.payload.admin ? 'admin' : 'user');

    default:
      return state;
  }
};

export default appReducer;
