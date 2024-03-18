import { LivaisonService } from './../../services/livaison.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { Depotage } from 'src/app/models/depotage';
import { Livraison } from 'src/app/models/livraison';
import { DepotageService } from 'src/app/services/depotage';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit{
  id: number=1;
  currentUser: Utilisateur = new Utilisateur();
  livraison: Livraison = new Livraison();
  constructor(private route: ActivatedRoute,private router: Router,
    private livaisonService: LivaisonService) { }

  ngOnInit() {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      this.currentUser = JSON.parse(userString);
    }
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null) {
      this.id = +idParam;
      console.log('ID: ', this.id);
      this.getdepot(this.id);
    }else{
      console.error('ID introuvable');
    }


  }

  list(){
    this.router.navigate(['historique']);
  }


  getdepot(id: number): void{
    this.livaisonService.getDepotage(id).subscribe( data =>{
      this.livraison= data;
      console.log(data);
    });

  }
  printPage(){
    window.print();
  }
}
