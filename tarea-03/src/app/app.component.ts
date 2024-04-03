import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'tarea-03';

  form = this.fb.group({
    correo: this.fb.control('', [Validators.email, Validators.required]),
    contraseña: this.fb.control('', Validators.required)
  });

  get emailControl() {
    return this.form.get('correo');
  }


  get passwordControl() {
    return this.form.get('contraseña');
  }


  constructor(private fb: FormBuilder) {
  }

  onSubmit(): void {
    swal.fire({
      icon: 'success',
      title: 'Registrado',
      text: 'Se ha registrado con exito',
    })
  }

}
