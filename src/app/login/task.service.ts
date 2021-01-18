import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  token:string;
  constructor(private http: HttpClient) {
     this.token = localStorage.getItem('token')||"";
   }


  getallTasks() {
    return this.http.get<any>(environment.getAllTasks, {
      headers:
        { Authorization: "Bearer " + this.token}
    });

  }

  sendRequest(taskId: any, taskerId: any, status: any, customerId: any) {
    return this.http.post<any>(environment.sendRequest,
      {
        "customerId": customerId,
        "taskerId": taskerId,
        "taskId": taskId,
        "taskRequestStatus": status
      },
      { headers: { Authorization: "Bearer " + this.token} }
    );

  }

  showPendingRequest(taskerId: any) {
    return this.http.get<any>(environment.showPendingTasks + taskerId, {
      headers:
        { Authorization: "Bearer " + this.token}
    });

  }
  findCustomer(id:any){
    return this.http.get<any>(environment.findCustomer+id, {
      headers:
        { Authorization: "Bearer " + this.token }
    });
  }
}
