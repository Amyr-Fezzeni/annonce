import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { Tab1PageRoutingModule } from './home-routing.module';
import { SearchbarModule } from '../components/searchbar/searchbar.module';
import { AnnonceItemComponent } from '../components/annonce-item/annonce-item.component';
import { AnnonceItemModule } from '../components/annonce-item/annonce-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    SearchbarModule,
    AnnonceItemModule
  ],
  declarations: [HomePage]
})
export class homePageModule {}
