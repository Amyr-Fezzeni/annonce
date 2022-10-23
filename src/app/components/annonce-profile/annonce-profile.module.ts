import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { AnnonceProfileComponent } from "./annonce-profile.component";


@NgModule({
    declarations:[AnnonceProfileComponent],
    imports:[CommonModule, IonicModule],
    exports:[AnnonceProfileComponent],
    providers:[]
})
export class AnnonceProfileModule{}