import { AuthentifcationService } from 'src/app/services/authentifcation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  currentUser: Utilisateur = new Utilisateur();
  utilisateur: Utilisateur = new Utilisateur();
  readonlyMode = true;
  activation: boolean = false;
  id: number = 0;
  constructor(private route: ActivatedRoute, private router: Router,
  private authentifcationService: AuthentifcationService){}

  ngOnInit(): void {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      this.currentUser = JSON.parse(userString);
      console.log('Informations de l\'utilisateur connecté :', this.currentUser);
      // Vous pouvez maintenant utiliser this.currentUser dans votre composant
    }

  }
  toggleEditMode(): void {
    this.readonlyMode = !this.readonlyMode;
    this.bouttonactif();
  }

  bouttonactif(): void {
    this.activation = !this.activation;
  }
  updateUser(): void {
    if (this.currentUser && this.currentUser.id) { // Vérifiez d'abord si this.currentUser et son id sont définis
      this.authentifcationService.updateUser(this.currentUser.id, this.currentUser).subscribe(data => {
        console.log(data);
        this.toggleEditMode();
      });
    } else {
      console.error("L'utilisateur actuel n'a pas d'ID défini.");
    }
  }
}
