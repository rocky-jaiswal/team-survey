import { QuestionType } from '../../constants/types';

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
