import { Injectable } from "@angular/core";
import { addDoc, collection, collectionData, Firestore, updateDoc } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { doc } from "@firebase/firestore";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor (private firestore: Firestore,private router: Router){}
    static currentUser : any = null;
    
     
         logOut(){
            UserService.currentUser = null;
            this.router.navigate(['']);
        }
    
 
   async updateUser(user:UserModel){
    return updateDoc(doc(this.firestore, `users/${user.id}`), {...user})
    }

   async addUser(user: UserModel){
    addDoc(collection(this.firestore, 'users'), user).then(
       (r)=>{ this.getUser(user.username, user.password);}
    )
   }


    async getUser(userName : String, password:String) {
   
    const noteRef = collection(this.firestore, 'users');
    
    let data = await collectionData(noteRef, {idField: 'id'});

    
    
    data.subscribe((element) => {
   
        
        element.forEach((u)=> {
            
            console.log('username : '+u.username + (u.username == userName ));
            console.log('password : '+u.password + (u.password == password));
            
            if(u.username == userName && u.password == password){
                console.log('loged in');
                UserService.currentUser = u;
                console.log('user => '+UserService.currentUser.password );
                this.router.navigate(['/home']);
            }
        });
    });

    // return null;
  }
}