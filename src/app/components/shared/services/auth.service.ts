import { ILoginVO } from '../../../modals/loginVO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient  ) { }

  login(data : ILoginVO ){
    return this.http.post(CONSTANTS.EndPoints.AUTHENTICATION , data)
  }

  signup(data : ILoginVO ){
    return this.http.post(CONSTANTS.EndPoints.SIGN_UP , data)
  }
}
