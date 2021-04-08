import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient  ) { }

  login(data :{email : string  } ){
    return this.http.post("https://run.mocky.io/v3/83d5c6c7-a3e9-402d-bcdf-f2c54c88d773" , data)
 
  }
}
