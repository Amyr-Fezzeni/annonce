import { Component } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { UserModel } from '../models/user.model';
import { AnnonceService } from '../services/annonce.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class Profile {

  annonces: Annonce[] = [];
  user_:any;
  constructor(private serviceAnnonce: AnnonceService, private userService: UserService) {}

  ngOnInit(): void {
    this.user_ = UserService.currentUser;
    this.serviceAnnonce.getAllAnnonces().subscribe(
      res => {
        this.annonces = [];
        res.forEach((annonce) =>{
          if(annonce.userId == this.user_.id){
            this.annonces.push(annonce);
          }
        });
        
        console.log(this.annonces);
      }
    );
  }
  logout(){
    this.userService.logOut();
    
  }

}
