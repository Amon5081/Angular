import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  authenticated: boolean;
  errorMessage: string;
}

export const initialState: AuthState = {
  authenticated: false,
  errorMessage: '',
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.registerUserSuccess, state => ({
    ...state,
    authenticated: true,
    errorMessage: ''
  })),
  on(AuthActions.registerUserFailure, (state, { error }) => ({
    ...state,
    errorMessage: error.message
  })),
  on(AuthActions.loginUserSuccess, state => ({
    ...state,
    authenticated: true,
    errorMessage: ''
  })),
  on(AuthActions.loginUserFailure, (state, { error }) => ({
    ...state,
    authenticated: false,
    errorMessage: error.message
  }))
);
