import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form: any = {
    fullname: null,
    email:null,
    phoneNumber:null,
    password: null
  };
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  signUp(){
    const { fullname,email, password , phoneNumber} = this.form;
    console.log(fullname);
    console.log(email);
    console.log(password);
    console.log(phoneNumber);
    let user: UserModel={
      username:email,
      fullName:fullname,
      password:password,
      phoneNumber: phoneNumber,
      annonces:[]
    };
    this.userService.addUser(user);

  }
}
