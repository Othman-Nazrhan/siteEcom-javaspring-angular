import { User } from './../../shared/user';
import { ROLES_ENUM } from './../../shared/enums';
import { Router } from '@angular/router';
import { IAuthResponse } from './../../../modals/authentication-response';
import { UserResource } from './../../../modals/user-resource';
import { ILoginVO } from "../../../modals/loginVO";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { CONSTANTS } from "../../shared/config/constants";

import Swal from "sweetalert2";
@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.sass"],
})
export class MyAccountComponent implements OnInit {
  loginUser = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  signupUser = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private user : User) {}

  login() {
    const loginVO: ILoginVO = {
      username: this.loginUser.value.email,
      password: this.loginUser.value.password,
    };
    this.authService.login(loginVO).subscribe(
      (res : IAuthResponse) =>{
          Swal.fire({
          text: "Your login successfully",
          timer: 4000,
          toast: true,
          heightAuto: false,
          icon : "success"
        });

        const usr: UserResource = {
          userID : res.id.toString(),
          userName : res.userName,
          email: res.email,
          token : res.token,
          role: (res.admin) ? ROLES_ENUM.ADMIN : ROLES_ENUM.USER,
        };
debugger;
        localStorage.setItem(CONSTANTS.LocalStorage.AUTHENTICATION_OBJECT, JSON.stringify(usr));

        //INIT OBEJECT USER
        this.user.userInfos;

        this.router.navigateByUrl("home");

      },
      (error) => {
        let msg = CONSTANTS.Messages.DEFAULT_ERROR;
        try {
          msg = error.error.message;
        } catch (error) {

        }

        Swal.fire({
          title: 'Error',
          text: msg,
          timer: 8000,
          heightAuto: false,
          icon : "error"
        })
      }
    );
  }

  signup() {
    const loginVO: ILoginVO = {
      username: this.signupUser.value.email,
      password: this.signupUser.value.password,
    };


    this.authService.signup(loginVO).subscribe(
      (res) =>
      Swal.fire({
        title: 'Congratulations',
        text: "Your account has been created successfully you can now log in!",
        timer: 8000,
        heightAuto: false,
        icon : "success"
      }),
      (error) => {
        let msg = CONSTANTS.Messages.DEFAULT_ERROR;
        try {
          msg = error.error.message;
        } catch (error) {}
        Swal.fire({
          title: 'Error',
          text: msg,
          timer: 8000,
          heightAuto: false,
          icon : "error"
        })
      }
    );
  }

  ngOnInit() {}
}
