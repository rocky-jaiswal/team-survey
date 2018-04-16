import { Dispatch as ReduxDispatch } from 'redux';

interface AppState {
  loading: boolean;
  locale: string;
  error: string | null;
  tokenGenerated: boolean;
  loggedIn: boolean;
  userEmail: string | null;
  userRole: 'admin' | 'user';
  // tslint:disable-next-line:no-any
  questions: any[];
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
