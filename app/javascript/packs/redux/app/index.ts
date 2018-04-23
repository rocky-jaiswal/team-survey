import * as Immutable from 'seamless-immutable';

import { ActionType, AppStateType, QuestionType } from '../../constants/types';
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
  FETCH_USER_PROFILE_SUCCESS,
  SET_QUESTION_SEQUENCE,
  SET_RESPONSE,
  SUBMIT_SURVEY_FAILED,
  SUBMIT_SURVEY_INPROGRESS,
  SUBMIT_SURVEY_SUCCESS,
  LOGOUT,
  GET_ALL_USERS_INPROGRESS,
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_SURVEYS_INPROGRESS,
  GET_ALL_SURVEYS_FAILED,
  GET_ALL_SURVEYS_SUCCESS,
  GET_ALL_RESPONSES_INPROGRESS,
  GET_ALL_RESPONSES_FAILED,
  GET_ALL_RESPONSES_SUCCESS
} from './actions';
import { setResponse, checkValidity } from './validateAndSetResponse';

const iState: AppStateType = {
  locale: 'en',
  loading: false,
  error: null,
  tokenGenerated: false,
  loggedIn: false,
  userEmail: null,
  userRole: 'user',
  surveyId: null,
  questions: [],
  visibleQuestionSequence: 1,
  responses: [],
  allResponsesValid: false,
  surveySubmitted: false,
  admin: {
    selectedSurvey: null,
    allUsers: [],
    allSurveys: [],
    allSubmittedResponses: []
  }
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
        .set('surveyId', action.payload.survey_id)
        .set('questions', action.payload.questions)
        .set('visibleQuestionSequence', Math.min(...action.payload.questions.map((q: QuestionType) => q.sequence)));

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
        .set('loggedIn', true)
        .set('userRole', action.payload.admin ? 'admin' : 'user');

    case SET_QUESTION_SEQUENCE:
      return state
        .set('visibleQuestionSequence', action.payload);

    case SET_RESPONSE:
      const updatedResponses = setResponse(state.questions, state.responses, action.payload);
      return state
        .set('responses', updatedResponses)
        .set('allResponsesValid', checkValidity(state.questions, updatedResponses));

    case SUBMIT_SURVEY_INPROGRESS:
      return state
        .set('loading', true);

    case SUBMIT_SURVEY_FAILED:
      return state
        .set('loading', false)
        .set('error', GENERATE_TOKEN_FAILED);

    case SUBMIT_SURVEY_SUCCESS:
      return state
        .set('loading', false)
        .set('error', state.error === SUBMIT_SURVEY_FAILED ? null : state.error)
        .set('surveySubmitted', true);

    case GET_ALL_USERS_INPROGRESS:
      return state
        .set('loading', true);

    case GET_ALL_USERS_FAILED:
      return state
        .set('loading', false)
        .set('error', GET_ALL_USERS_FAILED);

    case GET_ALL_USERS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', state.error === GET_ALL_USERS_FAILED ? null : state.error)
        .setIn(['admin', 'allUsers'], action.payload);

    case GET_ALL_SURVEYS_INPROGRESS:
      return state
        .set('loading', true);

    case GET_ALL_SURVEYS_FAILED:
      return state
        .set('loading', false)
        .set('error', GET_ALL_SURVEYS_FAILED);

    case GET_ALL_SURVEYS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', state.error === GET_ALL_SURVEYS_FAILED ? null : state.error)
        .setIn(['admin', 'allSurveys'], action.payload);

    case GET_ALL_RESPONSES_INPROGRESS:
      return state
        .set('loading', true);

    case GET_ALL_RESPONSES_FAILED:
      return state
        .set('loading', false)
        .set('error', GET_ALL_RESPONSES_FAILED);

    case GET_ALL_RESPONSES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', state.error === GET_ALL_RESPONSES_FAILED ? null : state.error)
        .setIn(['admin', 'allSubmittedResponses'], action.payload);

    case LOGOUT:
      sessionStorage.clear();
      return state
        .set('loggedIn', false);

    default:
      return state;
  }
};

export default appReducer;
