import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { AnnonceItemComponent } from "./annonce-item.component";


@NgModule({
    declarations:[AnnonceItemComponent],
    imports:[CommonModule, IonicModule],
    exports:[AnnonceItemComponent],
    providers:[]
})
export class AnnonceItemModule{}