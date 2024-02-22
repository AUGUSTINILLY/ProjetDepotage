import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Depot } from 'src/app/models/depot';
import { Depotage } from 'src/app/models/depotage';
import { LivaisonService } from 'src/app/services/livaison.service';

@Component({
  selector: 'app-listelivraison',
  templateUrl: './listelivraison.component.html',
  styleUrls: ['./listelivraison.component.css']
})

export class ListelivraisonComponent implements OnInit{
  depots: Depotage[]= [];

  constructor(private livraisonService: LivaisonService,
    private router: Router) {}

  ngOnInit() {
    this.liste();
  }

  liste() {
    this.depots = [];
    this.livraisonService.getLivraisonList().subscribe(
      result => {
        this.depots = result;
        console.log(this.depots);
      }
    );
  }

  deleteEmployee(id: number) {
    this.livraisonService.deleteLivraison(id)
      .subscribe(
        data => {
          console.log(data);
          this.liste();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
