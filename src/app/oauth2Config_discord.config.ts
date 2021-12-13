import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  loginUrl: 'https://discord.com/api/oauth2/authorize',
  responseType: 'code', 
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/home',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '902328060148326480',

  // set the scope for the permissions the client shoung servld request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'guilds email identify',
  oidc : false,
}