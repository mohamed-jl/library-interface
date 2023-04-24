import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteretudiantComponent } from './registeretudiant/registeretudiant.component';
import { LoginetudiantComponent } from './loginetudiant/loginetudiant.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AdministratorpageComponent } from './administratorpage/administratorpage.component';
import { EtudiantspageComponent } from './etudiantspage/etudiantspage.component';
import { KeysComponent } from './keys/keys.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ActivateabonnementComponent } from './activateabonnement/activateabonnement.component';
import { BooksComponent } from './books/books.component';
import { BookadderComponent } from './bookadder/bookadder.component';
import { PremiumpageComponent } from './premiumpage/premiumpage.component';

export const routes: Routes = [{path:"registeretudiant",component:RegisteretudiantComponent},{path:"loginetudiant",component:LoginetudiantComponent},{path:"main",component:FirstpageComponent},{path:"admin",component:AdministratorpageComponent},{path:"etudiants",component:EtudiantspageComponent},{path:"cles",component:KeysComponent},{path:"loginadmin",component:AdminloginComponent},
{path:"admindetails",component:AdmindetailsComponent},{path:"espaceetudiant",component:EtudiantComponent},{path:"activateabonnement",component:ActivateabonnementComponent},{path:"books",component:BooksComponent},{path:"bookadder",component:BookadderComponent},{path:"premiumpage",component:PremiumpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
