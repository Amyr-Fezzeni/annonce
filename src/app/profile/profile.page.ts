import { Component } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { UserModel } from '../models/user.model';
import { AnnonceService } from '../services/annonce.service';
import { UserData } from '../services/login.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class Profile {

  annonces: Annonce[] = [];
  user_:UserModel = UserData.currentUser;
  constructor(private serviceAnnonce: AnnonceService) {}

  ngOnInit(): void {
    this.user_ = UserData.currentUser;
    this.serviceAnnonce.getAllAnnonces().subscribe(
      res => {
        this.annonces = [];
        this.annonces = res;
        console.log(this.annonces);
      }
    );
  }
  onDelete(id){}
}
