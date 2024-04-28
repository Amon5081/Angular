import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../../layouts/pages/user/models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: IUser[] = [

    {
      id: '1',
      Nombre: 'Rodrigo',
      Apellido: 'Guzman',
      Email: 'a@b.com',
      nota: 'aprobado',
    },

    {
      id: '2',
      Nombre: 'antonio',
      Apellido: 'Gerardo',
      Email: 'a@b.com',
      nota: 'aprobado',
    },
  ]


  getAlumno(): Observable<IUser[]> {
    return of(this.alumnos)
  }


  constructor() { }
}
