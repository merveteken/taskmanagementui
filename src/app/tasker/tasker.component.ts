import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../login/task.service';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-tasker',
  templateUrl: './tasker.component.html',
  styleUrls: ['./tasker.component.scss']
})
export class TaskerComponent implements OnInit {
  taskRequestList : any[] = [];
  user:string;
leng:number;
customer:string="Merve Teken";
  constructor(private route: Router, private http: HttpClient, private router: ActivatedRoute,

    private userService: UserService,
    private taskService:TaskService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user") || "";
    this.taskService.showPendingRequest(localStorage.getItem('taskerId')).subscribe(data =>{
      this.taskRequestList = data;
   
      this.leng = this.taskRequestList.length;
    });
  }
  selectTask(id:any){
    alert('task selected');
  }


  exit() {
    localStorage.clear();
    this.route.navigate(["login"])
  }
}
