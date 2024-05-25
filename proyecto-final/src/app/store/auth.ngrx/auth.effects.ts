import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { LoginService } from '../../core/service/login.service';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.registerUser),
    mergeMap(({ user }) => this.loginService.RegisterUser(user).pipe(
      map(() => AuthActions.registerUserSuccess()),
      catchError(error => of(AuthActions.registerUserFailure({ error })))
    ))
  ));

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginUser),
    mergeMap(({ email, password }) => this.loginService.loginUser(email, password).pipe(
      map(authenticated => authenticated ? AuthActions.loginUserSuccess() : AuthActions.loginUserFailure({ error: new Error('Credenciales incorrectas') })),
      catchError(error => of(AuthActions.loginUserFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) { }
}
