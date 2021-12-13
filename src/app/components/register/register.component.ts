import { Component } from '@angular/core';
import { ApiUserServiceService } from 'src/app/services/api-user-service.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register-service.service';
import { HomeComponent } from '../home/home.component';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../home/home.component.css']
})
export class RegisterComponent extends HomeComponent {

  public registerFrom!: FormGroup;

  constructor(public authService: AuthorizationService, protected router: Router,protected snackBar: MatSnackBar, protected formBuilder: FormBuilder, protected userService: ApiUserServiceService, protected toastr: ToastrService, protected registerService: RegisterService, ) { 
    super(authService,router, snackBar, formBuilder, userService, toastr, registerService);
  }


  ngOnInit(): void {
    this.createStartFormRegister();
  }
  createStartFormRegister(){
    this.registerFrom = this.formBuilder.group({
      nickname:[''],
      password:['']
    })
  }

  async register(){  
    await this.registerService.createNewUser(this.registerFrom.value.nickname,  bcrypt.hashSync(this.registerFrom.value.password, 10)).then(  (response)=> { this.toastr.info("User has been registered", "Success"); 
  console.log("response", response)})
  }   


}
