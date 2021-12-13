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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usernick: string =""; 
  public loginForm!: FormGroup;

  constructor(public authService: AuthorizationService, protected router: Router,protected snackBar: MatSnackBar, protected formBuilder: FormBuilder, protected userService: ApiUserServiceService, protected toastr: ToastrService, protected registerService: RegisterService, ) { }


  ngOnInit(): void {
  
  }
 


}
