import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../core/service/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  authForm: FormGroup;
  message: string = '';
  errorMessage: string = '';
  token: string = '';
  constructor(private formBuilder: FormBuilder, private LoginService: LoginService, private http: HttpClient, private router: Router) {

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

      this.LoginService.RegisterUser(user).subscribe(
        response => {
          this.message = 'Usuario registrado con éxito.';
          this.authForm.reset();
          setTimeout(() => {
            this.message = '';
          }, 3000);
        },
        error => {
          this.errorMessage = 'Error al registrar usuario.';
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        }
      );
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
      this.LoginService.loginUser(user.email, user.password).subscribe(
        response => {
          this.errorMessage = 'Acceso permitido';
          this.router.navigate(['/dashboard/user']);
        },
      );
    } else {
      this.errorMessage = 'Credenciales incorrectas';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }

  }

}


