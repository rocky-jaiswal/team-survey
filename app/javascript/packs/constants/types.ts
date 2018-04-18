import { Dispatch as ReduxDispatch } from 'redux';

interface Question {
  id: number;
  sequence: number;
  title: string;
  type: 'MULTI' | 'RADIO' | 'RANGE' | 'TEXT';
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
