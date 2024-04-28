import { Component } from '@angular/core';
import { IUser } from './models/alumnos';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { AlumnosService } from '../../../core/service/alumnos.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  displayedColumns: string[] = ["id", 'Nombre', 'Email', 'nota', "acciones", "edit"];

  users: IUser[] = [
  ]


  constructor(private MatDialog: MatDialog, private AlumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.AlumnosService.getAlumno().subscribe((alumnos: any[]) => {
      this.users = alumnos.map((alumno) => ({
        id: alumno.id.toString(),
        Nombre: alumno.Nombre,
        Apellido: alumno.Apellido,
        Email: alumno.Email,
        nota: alumno.nota,
      }));
    });
  }



  openDialog(editingUser?: IUser): void {
    this.MatDialog.open(UserDialogComponent, { data: editingUser }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          if (editingUser) {
            this.users = this.users.map((user) => user.id === editingUser.id ? { ...user, ...result } : user)

          } else {

            this.users = [...this.users, result]
          }
        }
      },
    })

  }
  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id != id)
  }

}




