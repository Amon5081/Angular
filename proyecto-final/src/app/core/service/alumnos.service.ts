import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getListaAlumnos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/students`);
  }

  addAlumno(alumno: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/students`, alumno);
  }

  editAlumno(alumno: any): Observable<any> {
    const id = alumno.id;
    const editedAlumno = {
      Nombre: alumno.Nombre,
      Apellido: alumno.Apellido,
      Email: alumno.Email,
      nota: alumno.nota
    };
    return this.http.put<any>(`${this.apiUrl}/students/${id}`, editedAlumno);
  }

  deleteAlumno(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/students/${id}`);
  }
}
