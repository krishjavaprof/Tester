import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(emailId, password) {
     
      const body = {
        emailId:emailId,
        password:password,
       
            } 
     
      const headers = new HttpHeaders({ Authorization: 'Bearer ' + btoa(emailId + ':' + password) });
      return this.httpClient.post<User>('http://localhost:8080/userRegister/authenticate',body).pipe(
       map(
         userData => {
          sessionStorage.setItem('emailId',emailId);
          return userData;
         }
       )
  
      );
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('emailId')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('emailId')
  }
}