import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { RegisterUser } from '../models/registerUserDto'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  isUserLoggedIn: boolean = false;
  constructor(protected httpClient: HttpClient) { }
  users: RegisterUser[] = [];

  getUsers(){
    return this.httpClient.get<User[]>(environment.baseUrl+"/Users")
  }

}
