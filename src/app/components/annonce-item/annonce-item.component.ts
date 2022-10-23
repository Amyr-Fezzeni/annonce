import { Component, Input } from '@angular/core';
import { Annonce } from 'src/app/models/annonce.model';

@Component({
  selector: 'app-annonce-item',
  templateUrl: './annonce-item.component.html',
  styleUrls: ['./annonce-item.component.scss'],
})
export class AnnonceItemComponent {
  @Input() item: Annonce;
 

 

}
