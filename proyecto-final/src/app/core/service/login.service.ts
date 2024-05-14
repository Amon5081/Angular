import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000';
  private endpoint = 'users';
  private autenticated: boolean = false;

  constructor(private http: HttpClient) { }

  RegisterUser(user: any) {
    return this.http.post(`${this.apiUrl}/${this.endpoint}`, user);
  }

  loginUser(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/${this.endpoint}`).pipe(
      map(users => {
        const token = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);
        this.autenticated = !!token;
        return this.autenticated;
      })
    );
  }

  AutenticatedGet() {
    return this.autenticated
  }
}
