import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { RegisterUser } from '../models/registerUserDto'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { LoginServiceService } from './login-service.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService extends LoginServiceService {

  isUserLoggedIn: boolean = false;
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
   } 
  users: RegisterUser[] = [];

  async createNewUser(nickname:string, password: string){
    return this.httpClient.post<User>(`${environment.baseUrl}Users/Register/${nickname}`,{password}).toPromise(); 
  }
}
