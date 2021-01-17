import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username:string;
  firstname:string;
  lastname:string;

  email:string;

  password:string;

  phone:string;
  role:string;
  radioSelected:string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;



  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this.authenticationService.register(this.username, this.password,this.email, this.phone, this.firstname,this.lastname,this.radioSelected).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Signup Successful.';
      this.role = result.roles[0].name;
      this.authenticationService.authentice(this.username,this.password).subscribe((data)=>{
        localStorage.setItem('token',result.token);
        if(this.role==='CUSTOMER'){
          this.router.navigateByUrl('/customer');

        }else{
          this.router.navigateByUrl('/tasker');

        }

      })
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });  
  }

}
