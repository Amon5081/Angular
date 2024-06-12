import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumnosService } from "../../../../../../app/core/service/alumnos.service";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private MatDialogRef: MatDialogRef<UserDialogComponent>,
    private alumnosService: AlumnosService,
    @Inject(MAT_DIALOG_DATA) private editingUser: any
  ) {
    this.userForm = this.formBuilder.group({
      id: [editingUser ? editingUser.id : ''],
      Nombre: [editingUser ? editingUser.Nombre : '', Validators.required],
      Apellido: [editingUser ? editingUser.Apellido : '', Validators.required],
      Email: [editingUser ? editingUser.Email : '', Validators.required],
      nota: [editingUser ? editingUser.nota : '', Validators.required]
    });
  }

  guardar(): void {
    const user = this.userForm.value;
    if (this.editingUser) {
      this.editar(user);
    } else {
      this.agregar(user);
    }
  }

  private agregar(user: any): void {
    // Generate a unique random ID in string format
    const randomId = Math.random().toString(36).substr(2, 9);
    user.id = randomId; // Assign the random ID to the user object

    this.alumnosService.addAlumno(user).subscribe({
      next: (res) => {
        this.MatDialogRef.close(res);
      },
      error: (error) => {
        console.error('Error al agregar usuario:', error);
        // Mostrar un mensaje de error al usuario
      }
    });
  }


  private editar(user: any): void {
    if (this.editingUser) {
      this.alumnosService.editAlumno(user).subscribe({
        next: (res) => {
          this.MatDialogRef.close(res);
        },
        error: (error) => {
          console.error('Error al editar usuario:', error);
          // Mostrar un mensaje de error al usuario
        }
      });
    } else {
      console.error('No se pudo editar el usuario porque no se proporcionó un ID válido.');
    }
  }


}
