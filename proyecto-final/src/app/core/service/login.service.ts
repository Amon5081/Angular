import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000';
  private endpoint = 'users';
  private authenticated: boolean = false;

  constructor(private http: HttpClient) {
    this.authenticated = this.checkAuthToken();
  }



  RegisterUser(user: any) {
    return this.http.post(`${this.apiUrl}/${this.endpoint}`, user);
  }

  loginUser(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/${this.endpoint}`).pipe(
      map(users => {
        const token = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);
        this.authenticated = !!token;

        if (this.authenticated) {
          // Almacene el token en el almacenamiento local si el inicio de sesión es exitoso
          this.setAuthToken(token);
        }

        return this.authenticated;
      })
    );
  }

  isAuthenticated(): boolean {
    return this.authenticated || this.checkAuthToken(); // Verifique si hay un token después del inicio de sesión inicial
  }

  setAuthToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private checkAuthToken(): boolean {
    const token = this.getAuthToken();
    return !!token; // Verifique si el token existe y es verdadero
  }

  logout(): void {
    this.authenticated = false;
    localStorage.removeItem(TOKEN_KEY);
  }

  AutenticatedGet() {
    return this.authenticated
  }
}
