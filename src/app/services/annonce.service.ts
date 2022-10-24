import { Injectable } from "@angular/core";
import { addDoc, collection, collectionData, deleteDoc, Firestore, updateDoc } from "@angular/fire/firestore";
import { doc } from "@firebase/firestore";
import { Observable } from "rxjs";
import { Annonce } from '../models/annonce.model';
import { UserService } from "./user.service";
@Injectable({
    providedIn:'root'
})
export class AnnonceService{
    constructor (private firestore: Firestore){}
  
   async updateAnnonce(annonce:Annonce){
    
    return updateDoc(doc(this.firestore, `annonce/${annonce.id}`), {...annonce})    
    // return collection (collection(this.firestore, 'notes'),{'id':task.id}).
    }
    async deleteAnnonce(Id:String){
        console.log(Id);
    
    return await deleteDoc (doc(this.firestore, `annonce/${Id}`)).then((v) => console.log(`done delete ${Id}`))
   }
   async addAnnonce(annonce: Annonce){
    annonce.userId = UserService.currentUser.id;
    return addDoc(collection(this.firestore, `annonce`), annonce)
   }
    getAllAnnonces() : Observable<Annonce[]>{
        const noteRef = collection(this.firestore, 'annonce');
        return collectionData(noteRef, {idField: 'id'}) as Observable <Annonce[]>;
      }
 
}