import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Profile } from './profile.page';

import { ProfileRoutingModule } from './profile-routing.module';
import { AnnonceItemModule } from '../components/annonce-item/annonce-item.module';
import { AnnonceProfileModule } from '../components/annonce-profile/annonce-profile.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    AnnonceProfileModule
  ],
  declarations: [Profile]
})
export class profileModule {}
