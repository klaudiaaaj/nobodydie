import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TokenReceiverComponent } from './components/token-receiver/token-receiver.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'authorized', component:PlatformsComponent}, 
  {path: 'nextplatform', component:HomeComponent}, 
  {path: '**', component:PageNotFoundComponent}, 
  {path: ' ',   redirectTo: '/home', pathMatch: 'full' }, //default path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
