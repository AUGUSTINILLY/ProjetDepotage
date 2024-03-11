import { Component, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { AuthentifcationService } from 'src/app/services/authentifcation.service';
import { UserService } from 'src/app/services/user.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-login',
  template: '<app-login [userConnecte]= currentUser></app-login>',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  utilisateur: Utilisateur = new Utilisateur();
  currentUser: Utilisateur = new Utilisateur();
  reussite: boolean = false;
  username = '';
  password = '';
  error = '';
  id?: number= 0;

  constructor(private authService: AuthentifcationService, private router: Router) { }

  login(): void {
    this.authService.login(this.utilisateur.nom, this.utilisateur.mdp).subscribe(
      response => {
        // Stocker les informations d'authentification dans le stockage local
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.reussite = true;
        console.log(response);
        //this.currentUser = response.id;
        this.id = response.id;
        console.log("'les infos du user", this.id);
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.error = 'Erreur de connexion. Veuillez vérifier vos informations.';
        this.reussite = false;
      }
    );
  }


 /* user: Utilisateur = new Utilisateur; // Modèle utilisateur
  credentials = {
    username: this.user.email,
    password: this.user.mdp
  };
  constructor(private userService: UserService,private router: Router) {}

  seConnecter() {
    this.userService.connexion(this.credentials).subscribe(response => {
      this.router.navigate(['/dashbord']);
      console.log('Connexion réussie.');

      // Traitez la réponse ici, par exemple, stockez le token d'authentification, redirigez vers le tableau de bord, etc.
    }, error => {
      // Traitez les erreurs ici
      console.error('Erreur lors de la connexion :', error);

    });
  }

  login(){
    this.router.navigate(['/dahsbord']);
  }
  */

}

