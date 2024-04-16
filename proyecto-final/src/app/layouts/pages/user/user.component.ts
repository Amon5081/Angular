import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UserDialogModule } from './components/user-dialog/user-dialog.module';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  displayedColumns: string[] = ["id", 'Nombre', 'Apellido', 'Email', 'nota', "acciones", "edit"];

  users: IUser[] = [
    {
      id: "1",
      Nombre: 'andres',
      Apellido: 'gutierres',
      Email: 'andres@test.com',
      nota: "aprobado",
    },
    {
      id: "2",
      Nombre: 'andrea',
      Apellido: 'chacoz',
      Email: 'andrea@test.com',
      nota: "reprobado",
    },
  ]


  constructor(private MatDialog: MatDialog) { }

  openDialog(editingUser?: IUser): void {
    this.MatDialog.open(UserDialogComponent).afterClosed().subscribe({
      next: (result) => {
        this.users = [...this.users, result]
      },
    })

  }
  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id != id)
  }

}




