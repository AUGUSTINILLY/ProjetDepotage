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
  date: String = "";

  constructor(
    private router: Router,
    private depotageService: DepotageService
  ){}

  ngOnInit(): void {
    this.liste();

  }


  liste() {
    this.depotages = [];
    this.depotageService.getDepotageList().subscribe(
      result => {
        this.depotages = result;
        console.log(this.depotages);
      }
    );
  }

  /* recherche(date:string):void {
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
