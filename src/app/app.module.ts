// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';  
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component'; 

// Services 
import { AuthGuardService } from './guards/auth-guard.service'; 
import { JwtHelperService } from '@auth0/angular-jwt';

// Guards
import { CanActivateGuard } from './guards/can-active.guard';

// Functions
export function tokenGetter() {
  // return token from Session Storage > function name in "imports"
  return sessionStorage.getItem("token");
}

@NgModule({

  // declare Components
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],

  // import Modules
  imports: [
    BrowserModule,
    AppRoutingModule, 
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter, // function tokenGetter
        whitelistedDomains: [],
        blacklistedRoutes: []
      }
    })
  ],

  // provider Services
  providers: [ 
    CanActivateGuard, 
    AuthGuardService, 
    JwtHelperService 
  ],
  
  bootstrap: [AppComponent]

})

export class AppModule { }