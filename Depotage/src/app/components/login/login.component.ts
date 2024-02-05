import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { UserService } from 'src/app/services/user.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  user: Utilisateur = new Utilisateur; // Modèle utilisateur
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

}

