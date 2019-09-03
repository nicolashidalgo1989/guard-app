import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; 
import { AuthGuardService } from './auth-guard.service'; 

@Injectable({

  providedIn: 'root'

})

//exports CanActivateGuard class, implements from CanActivate
export class CanActivateGuard implements CanActivate {

  //constructor auth var of type AuthGuardService class imported from service file; router from Router
  constructor( private auth: AuthGuardService, private router: Router){ }

  //3° async function return boolean value
  async canActivate(){

    //declare boolean let var
    let valid:boolean;

    //await .then from method in auth class if valid 
    await this.auth.isAuthenticated().then(

        res => { valid = res },
        err => { valid = err }

      );  

    //return res or err
    return valid;
    
  }
  
}
