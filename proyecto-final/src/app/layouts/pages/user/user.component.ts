import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { AlumnosService } from '../../../core/service/alumnos.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  displayedColumns: string[] = ["id", 'Nombre', 'Email', 'inscripcion', "notas", "acciones", "edit"];
  users: any[] = [];

  constructor(private MatDialog: MatDialog, private AlumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.AlumnosService.getListaAlumnos().subscribe((alumnos: any[]) => {
      this.users = alumnos;
    });
  }

  openDialog(editingUser?: any): void {
    const dialogRef = this.MatDialog.open(UserDialogComponent, { data: editingUser });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (editingUser) {
          const index = this.users.findIndex((user) => user.id === editingUser.id);
          this.users[index] = result;
        } else {
          this.users.push(result);
        }
        this.users = [...this.users];
      }
    });
  }

  deleteUser(id: string) {
    this.AlumnosService.deleteAlumno(id).subscribe(() => {
      this.users = this.users.filter((user) => user.id !== id);
    });
  }

}
