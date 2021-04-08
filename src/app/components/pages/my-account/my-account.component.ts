import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {

loginUser = new FormGroup ({
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required),

}) 

  constructor( private  authService : AuthService) { }

  login(){
       this.authService.login(this.loginUser.value)
       .subscribe(res =>
         console.log(res)
       )
  }

  ngOnInit() {
  }
 
}
