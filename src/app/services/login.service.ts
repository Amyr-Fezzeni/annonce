import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})
export class UserData{
    static currentUser = {
        id:'pcFMlbCvLJEY9TzblmxU',
    username:'amyr',
    fullName:'Amyr Fezzeni',
    phoneNumber:'54230376',
    password:'login',
    annonces:[]
    }

    static async login(email:String, password:String){
        let userService : UserService;
        this.currentUser = await userService.getUser(this.currentUser.username, this.currentUser.password);
    }
    static logOut(){
        this.currentUser = null;
    }

    static async updateUser(user:UserModel){
        let userService : UserService;
        userService.updateUser(user);
        this.currentUser = await userService.getUser(this.currentUser.username, this.currentUser.password);
    }
}