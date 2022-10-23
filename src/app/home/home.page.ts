import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';
// import { AlertController } from 'ionic-angular';
import { AlertController } from '@ionic/angular';
import { UserData } from '../services/login.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  annonces: Annonce[] = [];

  constructor(private user: UserData, private serviceAnnonce: AnnonceService,private alertController: AlertController) {}

  ngOnInit(): void {
    this.serviceAnnonce.getAllAnnonces().subscribe(
      res => {
        this.annonces = [];
        this.annonces = res;
        console.log(this.annonces);
      }
    );
  }

  async addAnnonce(){
    const alert = await this.alertController.create({
      header: 'Add Annonce',
      buttons: ['Cancel',{text:'Add', handler:(data)=>{
        if((data.title as String).length > 2 && (data.description as String).length > 2 && (data.phoneNumber as String).length > 2){
         let c = new Date;
          this.serviceAnnonce.addAnnonce({
            id: c.toString(),
            title:data.title,
            description: data.description,
            phoneNumber: data.phoneNumber,
            userId:'pcFMlbCvLJEY9TzblmxU'
          })
          return;
        }
        else{
          return;
        }
      }}],
      inputs: [
        {
          name:'title',
          placeholder: 'Title',
        },
        {
          name:'description',
          placeholder: 'Description',
          type: 'textarea',
          
        },
        {
          name:'phoneNumber',
          placeholder: 'Phone number',
          max:8,
          type:'number',
        },
       
      ],
    });

    await alert.present();
  }
}
