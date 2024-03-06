import { LivaisonService } from 'src/app/services/livaison.service';
import { Livraison } from 'src/app/models/livraison';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Depotage } from 'src/app/models/depotage';
import { DepotageService } from 'src/app/services/depotage';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit{

  numeroFiltre?: string;
  depotages: Depotage[]= [];
  depotagefilter: Depotage[]= [];
  Livraison: Livraison = new Livraison();
  livraisons : Livraison[]= [];
  date: String = "";
  message: string = "";

  constructor(
    private router: Router,
    private depotageService: DepotageService,
    private livaisonService: LivaisonService,
  ){}

  ngOnInit(): void {
    this.liste();

  }


  liste() {
    this.livraisons = [];
    this.livaisonService.getDepotageList().subscribe(
      result => {
        this.livraisons = result;
        if(this.livraisons.length <= 0) {
          this.message ="Aucune Livraison Enregistrée dans la base de données."
        }else {
          this.livraisons = result;
        }
        console.log(this.livraisons);
      }
    );
  }

  /* 
  
  liste() {
    this.depotages = [];
    this.depotageService.getDepotageList().subscribe(
      result => {
        this.depotages = result;
        if(this.depotages.length <= 0) {
          this.message ="Aucune Livraison Enregistrée dans la base de données."
        }else {
          this.depotages = result;
        }
        console.log(this.depotages);
      }
    );
  }
  
  recherche(date:string):void {
    this.depotages = [];
    this.depotagefilter = [];
    this.depotageService.getDepotageList().subscribe(
      result => {
        this.depotagefilter = result;
        for (const dep of this.depotagefilter){
          if (dep.date === date) {
            this.depotages.push(dep)
          }
        }

      }
    );
  }*/

}
