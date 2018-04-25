import { QuestionType, ResponseType, UserType, SurveyType } from '../../constants/types';

export const SET_USER_EMAIL            = 'app/SET_USER_EMAIL';

export const GENERATE_TOKEN            = 'app/GENERATE_TOKEN';
export const GENERATE_TOKEN_INPROGRESS = 'app/GENERATE_TOKEN_INPROGRESS';
export const GENERATE_TOKEN_SUCCESS    = 'app/GENERATE_TOKEN_SUCCESS';
export const GENERATE_TOKEN_FAILED     = 'app/GENERATE_TOKEN_FAILED';

export const CREATE_SESSION            = 'app/CREATE_SESSION';
export const CREATE_SESSION_INPROGRESS = 'app/CREATE_SESSION_INPROGRESS';
export const CREATE_SESSION_SUCCESS    = 'app/CREATE_SESSION_SUCCESS';
export const CREATE_SESSION_FAILED     = 'app/CREATE_SESSION_FAILED';

export const FETCH_QUESTIONS            = 'app/FETCH_QUESTIONS';
export const FETCH_QUESTIONS_INPROGRESS = 'app/FETCH_QUESTIONS_INPROGRESS';
export const FETCH_QUESTIONS_SUCCESS    = 'app/FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILED     = 'app/FETCH_QUESTIONS_FAILED';

export const FETCH_USER_PROFILE            = 'app/FETCH_USER_PROFILE';
export const FETCH_USER_PROFILE_INPROGRESS = 'app/FETCH_USER_PROFILE_INPROGRESS';
export const FETCH_USER_PROFILE_SUCCESS    = 'app/FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAILED     = 'app/FETCH_USER_PROFILE_FAILED';

export const SUBMIT_SURVEY            = 'app/SUBMIT_SURVEY';
export const SUBMIT_SURVEY_INPROGRESS = 'app/SUBMIT_SURVEY_INPROGRESS';
export const SUBMIT_SURVEY_SUCCESS    = 'app/SUBMIT_SURVEY_SUCCESS';
export const SUBMIT_SURVEY_FAILED     = 'app/SUBMIT_SURVEY_FAILED';

export const SET_QUESTION_SEQUENCE = 'app/SET_QUESTION_SEQUENCE';
export const SET_NEXT_QUESTION = 'app/SET_NEXT_QUESTION';
export const SET_RESPONSE = 'app/SET_RESPONSE';

export const GET_ALL_USERS            = 'app/GET_ALL_USERS';
export const GET_ALL_USERS_INPROGRESS = 'app/GET_ALL_USERS_INPROGRESS';
export const GET_ALL_USERS_SUCCESS    = 'app/GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILED     = 'app/GET_ALL_USERS_FAILED';

export const GET_ALL_SURVEYS            = 'app/GET_ALL_SURVEYS';
export const GET_ALL_SURVEYS_INPROGRESS = 'app/GET_ALL_SURVEYS_INPROGRESS';
export const GET_ALL_SURVEYS_SUCCESS    = 'app/GET_ALL_SURVEYS_SUCCESS';
export const GET_ALL_SURVEYS_FAILED     = 'app/GET_ALL_SURVEYS_FAILED';

export const GET_ALL_RESPONSES            = 'app/GET_ALL_RESPONSES';
export const GET_ALL_RESPONSES_INPROGRESS = 'app/GET_ALL_RESPONSES_INPROGRESS';
export const GET_ALL_RESPONSES_SUCCESS    = 'app/GET_ALL_RESPONSES_SUCCESS';
export const GET_ALL_RESPONSES_FAILED     = 'app/GET_ALL_RESPONSES_FAILED';

export const LOGOUT = 'app/LOGOUT';

export const setUserEmail = (payload: string) => {
  return {
    payload,
    type: SET_USER_EMAIL
  };
};

export const generateToken = () => {
  return {
    type: GENERATE_TOKEN
  };
};

export const generateTokenInProgress = () => {
  return {
    type: GENERATE_TOKEN_INPROGRESS
  };
};

export const generateTokenSuccess = () => {
  return {
    type: GENERATE_TOKEN_SUCCESS
  };
};

export const generateTokenFailed = () => {
  return {
    type: GENERATE_TOKEN_FAILED
  };
};

export const createSession = (payload: string) => {
  return {
    payload,
    type: CREATE_SESSION
  };
};

export const createSessionInProgress = () => {
  return {
    type: CREATE_SESSION_INPROGRESS
  };
};

export const createSessionSuccess = (payload: string) => {
  return {
    payload,
    type: CREATE_SESSION_SUCCESS
  };
};

export const createSessionFailed = () => {
  return {
    type: CREATE_SESSION_FAILED
  };
};

export const fetchQuestions = () => {
  return {
    type: FETCH_QUESTIONS
  };
};

export const fetchQuestionsInProgress = () => {
  return {
    type: FETCH_QUESTIONS_INPROGRESS
  };
};

// tslint:disable-next-line:no-any
export const fetchQuestionsSuccess = (payload: QuestionType[]) => {
  return {
    payload,
    type: FETCH_QUESTIONS_SUCCESS
  };
};

export const fetchQuestionsFailed = () => {
  return {
    type: FETCH_QUESTIONS_FAILED
  };
};

export const fetchUserProfile = () => {
  return {
    type: FETCH_USER_PROFILE
  };
};

export const fetchUserProfileInProgress = () => {
  return {
    type: FETCH_USER_PROFILE_INPROGRESS
  };
};

// tslint:disable-next-line:no-any
export const fetchUserProfileSuccess = (payload: any) => {
  return {
    payload,
    type: FETCH_USER_PROFILE_SUCCESS
  };
};

export const fetchUserProfileFailed = () => {
  return {
    type: FETCH_QUESTIONS_FAILED
  };
};

export const setQuestionSequence = (payload: number) => {
  return {
    payload,
    type: SET_QUESTION_SEQUENCE
  };
};

export const setNextQuestion = () => {
  return {
    type: SET_NEXT_QUESTION
  };
};

export const setResponse = (payload: ResponseType) => {
  return {
    payload,
    type: SET_RESPONSE
  };
};

export const submitSurvey = () => {
  return {
    type: SUBMIT_SURVEY
  };
};

export const submitSurveyInProgress = () => {
  return {
    type: SUBMIT_SURVEY_INPROGRESS
  };
};

export const submitSurveySuccess = () => {
  return {
    type: SUBMIT_SURVEY_SUCCESS
  };
};

export const submitSurveyFailed = () => {
  return {
    type: SUBMIT_SURVEY_FAILED
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const getAllUsers = () => {
  return {
    type: GET_ALL_USERS
  };
};

export const getAllUsersInProgress = () => {
  return {
    type: GET_ALL_USERS_INPROGRESS
  };
};

export const getAllUsersSuccess = (payload: UserType[]) => {
  return {
    payload,
    type: GET_ALL_USERS_SUCCESS
  };
};

export const getAllUsersFailed = () => {
  return {
    type: GET_ALL_USERS_FAILED
  };
};

export const getAllSurveys = () => {
  return {
    type: GET_ALL_SURVEYS
  };
};

export const getAllSurveysInProgress = () => {
  return {
    type: GET_ALL_SURVEYS_INPROGRESS
  };
};

export const getAllSurveysSuccess = (payload: SurveyType[]) => {
  return {
    payload,
    type: GET_ALL_SURVEYS_SUCCESS
  };
};

export const getAllSurveysFailed = () => {
  return {
    type: GET_ALL_SURVEYS_FAILED
  };
};

export const getAllResponses = () => {
  return {
    type: GET_ALL_RESPONSES
  };
};

export const getAllResponsesInProgress = () => {
  return {
    type: GET_ALL_RESPONSES_INPROGRESS
  };
};

// tslint:disable-next-line:no-any
export const getAllResponsesSuccess = (payload: any) => {
  return {
    payload,
    type: GET_ALL_RESPONSES_SUCCESS
  };
};

export const getAllResponsesFailed = () => {
  return {
    type: GET_ALL_RESPONSES_FAILED
  };
};
