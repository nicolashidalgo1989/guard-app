import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ 
  providedIn: 'root'
})

export class AuthGuardService {

  //token
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
  /* token = null; */

  //constructor 
  constructor( private jwtHelper: JwtHelperService ) { }

  //1° function verify if token exists > return Promise
  
  tokenExists(): Promise<any> {
     
      //get token from session storage
      //const token: string = sessionStorage.getItem('token'); 

      //return promise if token exists
      return new Promise( (resolve, reject ) => {

        //setTimeout( function(){
          
          //if token isnt null > resolve
          if( this.token !== null ) resolve ( { state: true, message: this.token } ); 

          //if token is  null > reject
          if( this.token === null ) reject ( false );
          
        //}, 3000);
    
      });

  };

  //2° async function return if token is valid or expire after vertify is token exist > return promise type boolean
  async isAuthenticated(): Promise<boolean>{

    //declare isValid boolean let var
    let isValid: boolean;
    
    //await .then from tokenExists function 
    await this.tokenExists().then(
  
        //arrow function if resolve (res) param from return resolve
        (res) => {

          isValid = !this.jwtHelper.isTokenExpired( res.message );  
          console.log( 'Token is valid > ' + res.state );

        },

        //arrow function if resolve (err) param from return reject
        (err) => {

          isValid = err;
          console.log( 'Token is valid > ' + isValid );

        }
  
      );
    
    //

    //return boolean value
    return isValid;

  }

}