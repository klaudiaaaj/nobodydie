import { Component, Output, EventEmitter, ViewChild} from '@angular/core';
import { OAuthService, JwksValidationHandler, LoginOptions } from 'angular-oauth2-oidc';
import { authConfig } from './oauth2Config_discord.config';
//import { authConfig } from './oauth_discord.config'
import { filter } from 'minimatch';
import { AuthService } from '@auth0/auth0-angular';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@Output() sidenavClose = new EventEmitter();
@ViewChild('sidenav') sidenav: MatSidenav | undefined;
 tokenicho: string|undefined ="";

  constructor(public auth: AuthService){
  }



  getUserCredentials()
  {   
   return this.auth.idTokenClaims$.subscribe({next(IdToken){
      console.log('Current access token', IdToken)
    }, error(msg?){
      console.log(msg)
  }});
  }

  getAccessToken()  {
    this.auth.getAccessTokenSilently().subscribe(noideawhat => console.log("no idea what",noideawhat));
  }



  get token(){
    //let access_token  = this.auth.idTokenClaims$.subscribe(event =>this.tokenicho =event?.name)
    return null;
   // console.log("token from subscribe", access_token)
   // return access_token ? access_token : null;
  }
}