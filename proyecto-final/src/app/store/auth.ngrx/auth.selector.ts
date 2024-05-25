import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.authenticated
);

export const selectErrorMessage = createSelector(
  selectAuthState,
  (state: AuthState) => state.errorMessage
);
