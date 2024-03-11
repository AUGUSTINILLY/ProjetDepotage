import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { UtilisateurService } from './services/utilisateur.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LivaisonService } from './services/livaison.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { DepotageService } from './services/depotage';
import { DepotageComponent } from './components/depotage/depotage.component';
import { CuveService } from './services/cuve';
import { CategorieService } from './services/categorie';
import { CarbuurantService } from './services/carburant';
import { PersonneService } from './services/personne';
import { ProduitService } from './services/produitService';
import { RapportComponent } from './components/rapport/rapport.component';
import { UpdateComponent } from './components/update/update.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { ProfilComponent } from './components/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    HistoriqueComponent,
    DepotageComponent,
    RapportComponent,
    UpdateComponent,
    LivraisonComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UtilisateurService, UserService,LivaisonService,DepotageService,CuveService,CategorieService,CarbuurantService,PersonneService,ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
