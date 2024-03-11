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

  utilisateur: Utilisateur = new Utilisateur();
  id: number = 0;
  readonlyMode = true;
  activation: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router,
  private authentifcationService: AuthentifcationService){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null) {
      this.id = +idParam;
      console.log('ID: ', this.id);
      this.getUser(this.id);
    }else{
      console.error('ID introuvable');
    }
  }
  toggleEditMode(): void {
    this.readonlyMode = !this.readonlyMode;
    this.bouttonactif();
  }

  bouttonactif(): void {
    this.activation = !this.activation;
  }
  getUser(id: number): void{
    this.authentifcationService.getUserInfos(id).subscribe( (utilisateur:Utilisateur) =>{
      console.log(utilisateur.nomUser);
      this.utilisateur= utilisateur;
      console.log(this.utilisateur);
    }); 

  }
}
