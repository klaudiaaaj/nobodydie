import { Component, OnInit } from '@angular/core';
import { ApiUserServiceService } from 'src/app/services/api-user-service.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { Event } from '@angular/router';
import { authConfig } from 'src/app/oauth2Config_discord.config';
import { User } from 'src/app/models/User';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register-service.service';
import { coerceStringArray } from '@angular/cdk/coercion';
import { HomeComponent } from '../home/home.component';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../home/home.component.css']
})
export class LoginComponent extends HomeComponent {
  usernick: string =""; 
  public loginForm!: FormGroup;

  constructor(public authService: AuthorizationService, protected router: Router,protected snackBar: MatSnackBar, protected formBuilder: FormBuilder, protected userService: ApiUserServiceService, protected toastr: ToastrService, protected registerService: RegisterService, ) { 
    super(authService,router, snackBar, formBuilder, userService, toastr, registerService);
  }

  ngOnInit(): void {
    this.createStartFormLogin();
  }
  createStartFormLogin(){
    this.loginForm = this.formBuilder.group({
      nickname:[''],
      password:['']
    })
  }
  login(){
    this.registerService.getUsers().subscribe(res =>{
        const user = res.find((user:User)=>{
          return user.appNickname === this.loginForm.value.nickname && bcrypt.compareSync(this.loginForm.value.password, user.password);
        });   
      if(user){
        console.log("true booooooooooy")
        this.registerService.isUserLoggedIn = true;
        this.authService.login();
        localStorage.setItem("CurrentUsr", user.userId.toString())
      }
      else{        
        this.toastr.error("User not found", "Error")
        this.submitForm;
        this.registerService.isUserLoggedIn = false;
      }
    })
  }
  
  submitForm(){
    if(this.loginForm!==undefined)
    this.loginForm.reset();
    this.createStartFormLogin();
}

}
