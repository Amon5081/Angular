import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000';
  private endpoint = 'users';

  constructor(private http: HttpClient) { }

  RegisterUser(user: any) {
    return this.http.post(`${this.apiUrl}/${this.endpoint}`, user);
  }

  loginUser(email: string, password: string) {
    return this.http.get<any>(`${this.apiUrl}/${this.endpoint}?email=${email}&password=${password}`);
  }
}
