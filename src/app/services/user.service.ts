import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {LoginUser,  User} from '../models/user.model';
import {PatientUser} from '../models/patient.model';
import { Insurance } from '../models/insurance.model'; 
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '/api/v1/userRegister';
  private profileDetails$: Observable<any>;
    private activityDetails$: Observable<any>;

  constructor(private http: HttpClient) { }
  regUse:User;
 
  createUser(user) {
    this.regUse=Object.assign(user)
 
    console.log("JSON "+JSON.stringify(this.regUse))
    return this.http.post(`http://localhost:8080/userRegister/createUser`, this.regUse);
}
loginUser(user: LoginUser) {
  return this.http.post(`http://localhost:8080/userRegister/loginUser`, user);
}

changePassword(user){
  
  this.regUse=Object.assign(user)
  return this.http.post(`http://localhost:8080/userRegister/changePassword`, user);
}




}
