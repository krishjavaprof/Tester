import { Injectable } from '@angular/core';
import { loggedInUseInfo } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserStateService {
    public userInfo: loggedInUseInfo = new loggedInUseInfo();
    constructor(){}

    public setUserInfo(value: any, key?: any): void {
        if (key) {
            this.userInfo[key] = value;
        } else {
            this.userInfo = value;
        }
    }

    public getUserInfo(): loggedInUseInfo {
        return this.userInfo;
    }

}