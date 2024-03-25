import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tarea-02';


  estudiantes: { nombre: string, edad: number }[] = [{ nombre: 'Alberto', edad: 21 }, { nombre: 'Cristian', edad: 20 }];
  nuevoNombre = '';
  nuevaEdad = 0;

  public mensajeError: string = '';

  agregarEstudiante() {

    if (/[0-9]/.test(this.nuevoNombre.toString())) {
      this.mensajeError = 'Por favor ingresa un nombre y una edad válida mayor a 0';
      return;
    }

    if (this.nuevoNombre && this.nuevaEdad && this.nuevaEdad > 0) {
      // Agregar el estudiante a la lista
      this.estudiantes.push({ nombre: this.nuevoNombre, edad: this.nuevaEdad });

      // Limpiar los campos después de agregar el estudiante
      this.nuevoNombre = '';
      this.nuevaEdad = 0; // Reiniciar la edad a 0

      this.mensajeError = ''; // Limpiar el mensaje de error
    } else {
      this.mensajeError = 'Por favor ingresa un nombre y una edad válida mayor a 0';
    }
  }

  eliminarAlumno(i: number) {
    this.estudiantes.splice(i, 1);
  }

}
