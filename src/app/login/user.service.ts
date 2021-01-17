import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getallTasker() {
    return this.http.get<any>(environment.getTaskers, { headers: 
      { Authorization:"Bearer "+localStorage.getItem('token') } });

  }

}
