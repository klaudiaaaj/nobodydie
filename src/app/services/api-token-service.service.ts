import { User } from './../models/User';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'; 
import { ApiUserServiceService } from './api-user-service.service';
import { AuthService } from '@auth0/auth0-angular';
import { IdToken } from '@auth0/auth0-spa-js';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Platform} from './../models/PlatformDto'
import IdTokenDto, { IdTokenGetDto } from '../models/IdTokenDto';
import IdTokenPostDto from '../models/IdTokenDto';

@Injectable({
  providedIn: 'root'
})
export class ApiTokenServiceService extends ApiUserServiceService{

  constructor(protected httpClient: HttpClient) { 
    super(httpClient)
  }
  createIdToken(idToken: IdTokenPostDto): Observable<IdTokenGetDto> {
    return this.httpClient.post<IdTokenGetDto>(environment.baseUrl+`/IdTokens`, idToken);     
  }

  getPlatformList(): Observable<Platform[]>{ 
    return this.httpClient.get<Platform[]>(environment.baseUrl+'/Platforms'); 
  }
  






}
