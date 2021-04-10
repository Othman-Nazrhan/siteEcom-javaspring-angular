import { UserResource } from './../../modals/user-resource';
import { Injectable } from '@angular/core';
import { CONSTANTS } from './config/constants';

@Injectable()
export class User {

    //attributs
    private _user: UserResource;
    private _emptyUser: UserResource = {
      userID : "",
      userName : "",
      email: "",
      token : "",
      role: "",
    };

    //constructor
    constructor(

      ) { }


    //properties
    get userInfos(): UserResource {
        if (this._user && !!this._user.userName)
            return this._user;
        else {
            const storage_user = localStorage.getItem(CONSTANTS.LocalStorage.AUTHENTICATION_OBJECT);
            this._user = (storage_user) ? JSON.parse(storage_user) : null;
            return this._user || this._emptyUser;
        }
    }

    set userInfos(value: UserResource) { this._user = value; }

    removeUser(){
        localStorage.removeItem(CONSTANTS.LocalStorage.AUTHENTICATION_OBJECT);
        this._user = this._emptyUser;
    }
}
