import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'; 
import { CanActivateGuard } from './guards/can-active.guard';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent,  canActivate: [CanActivateGuard] },
  { path: '**', redirectTo : 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
