import { Injectable } from "@angular/core";
import { addDoc, collection, collectionData, Firestore, updateDoc } from "@angular/fire/firestore";
import { doc } from "@firebase/firestore";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor (private firestore: Firestore){}
  
   async updateUser(user:UserModel){
    return updateDoc(doc(this.firestore, `users/${user.id}`), {...user})
    }

   async addUser(user: UserModel){
    return addDoc(collection(this.firestore, 'users'), user)
   }


   async getUser(userName : String, password:String){
    const noteRef = collection(this.firestore, 'users');
    
    let data = await collectionData(noteRef, {idField: 'id'});
    data.forEach(element => {
        console.log(element);
    });

    return null;
  }
}