import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private MatDialogRef: MatDialogRef<UserDialogComponent>, @Inject(MAT_DIALOG_DATA) private editingUser: IUser) {

    this.userForm = this.formBuilder.group({
      id: this.generateRandomId(),
      Nombre: ["", [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Apellido: ["", [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Email: ["", [Validators.required, Validators.email]],
      nota: [""],
    })

    if (editingUser) {
      this.userForm.patchValue(editingUser)

    }
  }

  generateRandomId = (): string => {
    return Math.random().toString(36).substr(2, 3);
  };


  guardar(): void {
    if (this.userForm.valid) {
      this.userForm.markAllAsTouched();
      this.MatDialogRef.close(this.userForm.value);
    } else {
      alert("Complete los campos correctamente")
    }
  }


}
