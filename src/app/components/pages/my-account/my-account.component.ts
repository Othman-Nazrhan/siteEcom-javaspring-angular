import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
     login (loginForm :NgForm){
    console.log(loginForm.value)
  }


}
