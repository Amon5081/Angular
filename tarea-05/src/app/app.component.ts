import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './service/register.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [RegisterService]
})
export class AppComponent {
  title = 'tarea-05';
  Formtest: FormGroup;
  message: string = '';
  errorMessage: string = '';
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private http: HttpClient) {

    this.Formtest = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ''
    });

  }

  register() {
    if (this.Formtest.valid) {
      const user = {
        email: this.Formtest.get('email')?.value,
        password: this.Formtest.get('password')?.value
      };

      this.registerService.RegisterUser(user).subscribe(
        response => {
          this.message = 'Usuario registrado con éxito.';
          this.Formtest.reset();
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


  login() {
    const email = this.Formtest.get('email')?.value;
    const password = this.Formtest.get('password')?.value;

    this.registerService.loginUser(email, password).subscribe(
      response => {
        const userExists = response.find((user: { email: any; password: any; }) => user.email === email && user.password === password);

        if (userExists) {
          this.message = 'El usuario existe en el servidor.';
        } else {
          this.message = 'El usuario no existe en el servidor.';
        }
      },
      error => {
        this.errorMessage = 'Error al conectar con el servidor.';
      }
    );
  }

}


