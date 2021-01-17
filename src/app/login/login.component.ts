import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {   }

  ngOnInit() {
    if(localStorage.getItem("token")){
      this.router.navigateByUrl(""+localStorage.getItem("page"));

    }
  }
    
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  get f(){
    return this.form.controls;
  }
  handleLogin() {
    this.authenticationService.authentice(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      localStorage.setItem('token',result.token);
      if(result.user.roles[0].name==='CUSTOMER'){
        localStorage.setItem('page','/customer');
        localStorage.setItem('customerId',result.user.id);
        localStorage.setItem('user',result.user.firstname+" "+result.user.lastname);
        this.router.navigateByUrl('/customer');

      }else{
        localStorage.setItem('page','/tasker');
        localStorage.setItem('user',result.user.firstname+" "+result.user.lastname);
        localStorage.setItem('taskerId',result.user.id);

        this.router.navigateByUrl('/tasker');

      }
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
}