import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private MatDialogRef: MatDialogRef<UserDialogComponent>) {
    this.userForm = this.formBuilder.group({
      id: this.generateRandomId(),
      Nombre: ["", Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')],
      Apellido: ["", Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')],
      Email: ["", Validators.required, Validators.email],
      nota: [""],
    })
  }

  generateRandomId = (): string => {
    return Math.random().toString(36).substr(2, 3);
  };

  guardar(): void {
    if (this.userForm.valid) {
      this.userForm.markAllAsTouched();
    } else {
    }
    this.MatDialogRef.close(this.userForm.value);

  }


}
