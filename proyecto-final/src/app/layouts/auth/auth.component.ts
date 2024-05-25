import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { registerUser, loginUser } from '../../store/auth.ngrx/auth.actions';
import { RootState } from '../../store/auth.ngrx/index';
import { selectAuthenticated } from '../../store/auth.ngrx/auth.selector';
import { selectErrorMessage } from '../../store/auth.ngrx/auth.selector';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  authForm: FormGroup;
  message: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<RootState>
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registrar() {
    if (this.authForm.valid) {
      const user = {
        email: this.authForm.get('email')?.value,
        password: this.authForm.get('password')?.value
      };
      this.store.dispatch(registerUser({ user }));
      this.store.select(selectAuthenticated).subscribe((authenticated) => {
        if (authenticated === true) {
          this.message = 'Usuario registrado con exito';
        }
      })
    } else {
      this.errorMessage = 'Por favor, asegúrese de rellenar todos los campos correctamente.';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }
  }

  ingreso() {
    if (this.authForm.valid) {
      const user = {
        email: this.authForm.get('email')?.value,
        password: this.authForm.get('password')?.value
      };

      this.store.dispatch(loginUser({ email: user.email, password: user.password }));
      this.store.select(selectAuthenticated).subscribe((authenticated) => {
        if (authenticated === true) {
          this.router.navigate(['/dashboard/user']);
        }

        this.store.select(selectErrorMessage).subscribe((errorMessage) => {
          if (errorMessage) {
            this.errorMessage = errorMessage;
            setTimeout(() => {
              this.errorMessage = '';
            }, 3000);
          }
        });
      })
    }
  }
}
