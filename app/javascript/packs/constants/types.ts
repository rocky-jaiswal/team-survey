import { Dispatch as ReduxDispatch } from 'redux';

interface Question {
  id: number;
  sequence: number;
  title: string;
  type: string;
  options: string[];
}

export type QuestionType = Question;

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
