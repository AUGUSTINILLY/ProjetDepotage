import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { DepotageComponent } from './components/depotage/depotage.component';
import { RapportComponent } from './components/rapport/rapport.component';
import { UpdateComponent } from './components/update/update.component';
import { AuthGuard } from './auth.guard';
import { LivraisonComponent } from './components/livraison/livraison.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashbordComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/login' },
  {path: 'inscription', component: RegisterComponent},
  {path: 'connexion', component: LoginComponent},
  //{path: 'dahsbord', component: DashbordComponent},
  {path: 'historique', component: HistoriqueComponent, canActivate: [AuthGuard]},
  //{path: 'depotage', component: DepotageComponent, canActivate: [AuthGuard]},
  {path: 'details/:id', component: RapportComponent},
  {path: 'modifier/:id', component: UpdateComponent},
  {path: 'depotage', component: LivraisonComponent, canActivate: [AuthGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
