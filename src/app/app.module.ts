import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { TokenReceiverComponent } from './components/token-receiver/token-receiver.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TokenReceiverComponent,
    PageNotFoundComponent,
    PlatformsComponent,
    UserinfoComponent,  
    LoginComponent, RegisterComponent, 
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule, MatListModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatCardModule, 
    FormsModule,
    OAuthModule.forRoot(),
    ToastrModule.forRoot(),
    AuthModule.forRoot({
      domain: 'dev-ohbkk21r.us.auth0.com',
      clientId: 'ky4NW1ToPGJUENs7h9CtoASwdxV5o1VA',
      redirectUri: 'http://localhost:4200/authorized', skipRedirectCallback: false
    }), 
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
