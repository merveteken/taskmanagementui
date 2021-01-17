import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../login/task.service';
import { UserService } from '../login/user.service';
import { TaskerComponent } from '../tasker/tasker.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  taskerList : any[] = [];
  list :any[] = [];
  search = "";
  showTaskers:boolean=false;
  tasks :any[] = [];
  user:string="";
  taskId:any;
  buttonText:string;

  constructor(private route: Router, private http: HttpClient, private router: ActivatedRoute,

    private userService: UserService,
    private taskService:TaskService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user") || "";
    this.taskService.getallTasks().subscribe(res =>{
      this.tasks = res;
    })

    this.userService.getallTasker().subscribe(data =>{
      this.taskerList = data;
      this.list = Object.assign([], this.taskerList);
    })


  }
  // search Change
  fncSearchChange(txt: any) {

    /*  if (txt == "") {
        this.list = Object.assign([], this.productList)
      }else {
        // searching
        var searchList: never[] = []
        this.productList.forEach(item => {
          //console.log("title : " + item.productName)
          if( item.productName.toLowerCase().includes(txt.toLowerCase()) ) {
            console.log("title : " + item.productName)
            searchList.push(item)
          }
        })
        this.list = searchList
      }*/
  }

  selectTask(taskId:any){
    this.taskId = taskId;
    this.showTaskers = true;

  }

  selectTasker(taskerId:any){
    this.taskService.sendRequest(this.taskId,taskerId,"PENDING",localStorage.getItem("customerId")).subscribe(()=>{
      alert("request sent...");
    });
    this.route.navigate(["customer"])
  }
  
  exit() {
    localStorage.clear();
    this.route.navigate(["login"])
  }
}
