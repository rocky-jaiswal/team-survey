import { Dispatch as ReduxDispatch } from 'redux';

interface Question {
  id: number;
  sequence: number;
  title: string;
  subtitle?: string;
  message?: string;
  type: 'MULTI' | 'RADIO' | 'RANGE' | 'TEXT' | 'MESSAGE';
  options: string[];
  responseRequired: boolean;
}

export type QuestionType = Question;

interface Response {
  questionId: number;
  selection: string | string[];
  added?: boolean;
}

export type ResponseType = Response;

interface AggregateResponseData {
  option: string;
  count: number;
}

export type AggregateResponseDataType = AggregateResponseData;

interface User {
  id?: number;
  email: string;
  role: 'admin' | 'user';
  admin?: boolean;
  blocked?: string | null;
}

export type UserType = User;

interface Survey {
  id?: number;
  title: string;
  active?: boolean | null;
}

export type SurveyType = Survey;

interface AppState {
  loading: boolean;
  locale: string;
  error: string | null;
  tokenGenerated: boolean;
  loggedIn: boolean;
  userEmail: string | null;
  userRole: 'admin' | 'user';
  surveyId: number | null;
  questions: Question[];
  visibleQuestionSequence: number;
  responses: Response[];
  allResponsesValid: boolean;
  surveySubmitted: boolean;
  admin: {
    selectedSurvey: number | null;
    allUsers: UserType[];
    allSurveys: SurveyType[];
    // tslint:disable-next-line:no-any
    allSubmittedResponses: any;
  };
}

export type AppStateType = AppState;

interface RootState {
  app: AppState;
}

export type RootStateType = RootState;

interface Action<T> {
  type: string;
  payload?: T;
}

export type ActionType<T> = Action<T>;

export type Dispatch = ReduxDispatch<RootState>;
