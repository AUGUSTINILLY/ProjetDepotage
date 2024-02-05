import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { RapportComponent } from './components/rapport/rapport.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { CreatelivraisonComponent } from './livraisons/createlivraison/createlivraison.component';
import { UpdatelivraisonComponent } from './livraisons/updatelivraison/updatelivraison.component';
import { DeletelivraisonComponent } from './livraisons/deletelivraison/deletelivraison.component';
import { ListelivraisonComponent } from './livraisons/listelivraison/listelivraison.component';
import { DetailslivraisonComponent } from './livraisons/detailslivraison/detailslivraison.component';
import { LivraisonComponent } from './components/livraison/livraison.component';

const routes: Routes = [
  {path: '', redirectTo: 'connexion', pathMatch: 'full'},
  {path: 'inscription', component: RegisterComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'dahsbord', component: DashbordComponent},
  {path: 'livraison', component: LivraisonComponent},
  {path: 'rapport', component: RapportComponent},
  {path: 'historique', component: HistoriqueComponent},
  {path: 'create', component: CreatelivraisonComponent},
  {path: 'update/:id', component: UpdatelivraisonComponent},
  {path: 'delete/{id}', component: DeletelivraisonComponent},
  {path: 'liste', component: ListelivraisonComponent},
  {path: 'details/:id', component: DetailslivraisonComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
