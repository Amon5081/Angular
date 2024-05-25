import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './auth.reducer';

export interface RootState {
  auth: AuthState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  auth: authReducer,
}
