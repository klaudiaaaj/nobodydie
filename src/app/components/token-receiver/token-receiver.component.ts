import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { IdToken } from '@auth0/auth0-spa-js';
import { Platform } from './../../models/platform';
import { AuthorizationService } from 'src/app/services/authorization.service';
import {environment} from './../../../environments/environment'
@Component({
  selector: 'app-token-receiver',
  templateUrl: './token-receiver.component.html',
  styleUrls: ['./token-receiver.component.css']
})
export class TokenReceiverComponent implements OnInit {
  @Output()user: IdToken = ({} as any) as IdToken;
  @Output() platform_type: Platform = Platform.discord;
  Github: Boolean = false;
  Discord: Boolean = false;

  constructor(public auth: AuthService , public authorization: AuthorizationService){
  }

  onClick()
{ 
  this.authorization.logout();
  this.authorization.login();
}

logout(){
  this.authorization.logout();
}
 accessToken : string= "";
  ngOnInit() {
   this.getAccessToken();
   this.getUserCredentials()
  
  }
  setupData(idToken: IdToken){ 
    this.user=idToken;
    this.platform_type=this.getOrg();
    if (this.platform_type==Platform.discord)
        this.Discord=true; 
    if(this.platform_type==Platform.github)
        this.Github=true;
  }    
  
  getUserCredentials()
  {   
   return this.auth.idTokenClaims$.subscribe((idToken) =>{
     if(idToken!=null){
      this.setupData(idToken);
   }})
  }
  getAccessToken()  {
    this.auth.getAccessTokenSilently({
      redirect_uri: ""
    }).subscribe(noideawhat => {
      this.accessToken=noideawhat;});
  }
  getOrg(): Platform
  { console.log(this.user);
    if(this.user.sub?.includes("discord")){
      console.log(this.user.nickname)
      return Platform.discord;
    }
    else{
      console.log(this.user.sub)
     return Platform.github;
    }}

    joinDc(){
      window.open(environment['invenation']); 
    }
}
