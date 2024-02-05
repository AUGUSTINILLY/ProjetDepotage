import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { RapportComponent } from './components/rapport/rapport.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { MenuComponent } from './components/menu/menu.component';
import { UtilisateurService } from './services/utilisateur.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LivaisonService } from './services/livaison.service';
import { CreatelivraisonComponent } from './livraisons/createlivraison/createlivraison.component';
import { DetailslivraisonComponent } from './livraisons/detailslivraison/detailslivraison.component';
import { UpdatelivraisonComponent } from './livraisons/updatelivraison/updatelivraison.component';
import { ListelivraisonComponent } from './livraisons/listelivraison/listelivraison.component';
import { DeletelivraisonComponent } from './livraisons/deletelivraison/deletelivraison.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    RapportComponent,
    HistoriqueComponent,
    LivraisonComponent,
    MenuComponent,
    CreatelivraisonComponent,
    DetailslivraisonComponent,
    UpdatelivraisonComponent,
    ListelivraisonComponent,
    DeletelivraisonComponent,
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
  providers: [UtilisateurService, UserService,LivaisonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
