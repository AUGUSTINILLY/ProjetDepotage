import { AuthentifcationService } from 'src/app/services/authentifcation.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from './models/Utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentUser: Utilisateur = new Utilisateur();
  title = 'Depotage';
  constructor(private router: Router ,private authentifcationService: AuthentifcationService){
    this.authentifcationService.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });

  }

  ngOnInit(): void {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      this.currentUser = JSON.parse(userString);
      console.log('Informations de l\'utilisateur connecté :', this.currentUser);
      // Vous pouvez maintenant utiliser this.currentUser dans votre composant
    }
  }

  deconnecter(){
    this.authentifcationService.logout()
    this.router.navigate(['/connexion']);

  }
}
