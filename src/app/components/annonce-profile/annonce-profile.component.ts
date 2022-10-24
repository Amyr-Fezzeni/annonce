import { Component, Input, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce.model';
import { AnnonceService } from 'src/app/services/annonce.service';
import { UserData } from 'src/app/services/login.service';

@Component({
  selector: 'app-annonce-profile',
  templateUrl: './annonce-profile.component.html',
  styleUrls: ['./annonce-profile.component.scss'],
})
export class AnnonceProfileComponent {
  @Input() item: Annonce;
  constructor( private serviceAnnonce: AnnonceService) { }

onDelete(itemId:String){
  console.log(itemId);
  console.log(this.item);
  
  this.serviceAnnonce.deleteAnnonce(itemId);
  
}
}
