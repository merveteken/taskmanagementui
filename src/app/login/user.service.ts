import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:string;

  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token')||"";

  }

  getallTasker() {
    return this.http.get<any>(environment.getTaskers, { headers: 
      { Authorization:"Bearer "+this.token } });

  }

}
