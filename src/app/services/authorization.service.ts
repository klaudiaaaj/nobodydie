import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { IdToken } from '@auth0/auth0-spa-js';
import { Observable, of } from 'rxjs';
import { fromEvent, interval } from 'rxjs';
import { concatMap, take, map, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  
  login(){  
    this.auth.loginWithRedirect({
    appState: {target : '/authorized'}
    });
  }
  getRedirected() {  
      this.getUserCredentials(); this.getAccessToken(); this.logout()   
  }
   getUserCredentials()
  {   
   return this.auth.idTokenClaims$.pipe(filter(this.isNonNull)); 
  }

  getAccessToken()  {
    this.auth.getAccessTokenSilently().subscribe(noideawhat => console.log("no idea what",noideawhat));
  }

  logout(){
    this.auth.logout();
    }   

  isNonNull<T>(value: T): value is NonNullable<T> {
      return value != null;
    }
}
