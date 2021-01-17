import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {



  public username: String;
  public password: String;

  constructor(private http: HttpClient) {

  }

  authentice(username: String, password: String) {
    return this.http.post<any>(environment.authenticate, {
      "username": username,
      "password": password
    });

  }


  register(username: String, password: String, email: String, phone: String,firstname:String,lastname:String, role: String) {
    return this.http.post<any>(environment.register, {
      "username": username,
      "firstName":firstname,
      "lastName":lastname,
      "email": email,
      "password": password,
      "phone": phone,
      "role": role
    });

  }
}