import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: any = {
    email:null,
    password: null
  };
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  async login(){
    const { email, password } = this.form;

    console.log(email);
    console.log(password);
    console.log(UserService.currentUser);
    
    this.userService.getUser(email,password);
   
   

  }
}