import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Cuve } from 'src/app/models/cuve';
import { Depot } from 'src/app/models/depot';
import { Depotage } from 'src/app/models/depotage';
import { Livreur } from 'src/app/models/livreur';
import { LivaisonService } from 'src/app/services/livaison.service';

@Component({
  selector: 'app-createlivraison',
  templateUrl: './createlivraison.component.html',
  styleUrls: ['./createlivraison.component.css']
})
export class CreatelivraisonComponent implements OnInit{
  Depotge: Depotage = new Depotage();
  livreur: Livreur = new Livreur();
  cuve: Cuve = new Cuve();
  cuves: Cuve[] = [];
  categorie: Categorie = new Categorie();
  categories: Categorie[] = [];





  ngOnInit(): void {

  }
  constructor(private router: Router, private fb: FormBuilder, private livraisonService: LivaisonService) {}

  Save(){

  }

  ListeCuves(){
    this.categories=[];
    this.livraisonService.getLivraisonList().subscribe(
      result => {
        this.categories = result;
      }
    );
  }
  ListeCategories(){
    this.categories=[];
    this.livraisonService.getLivraisonList().subscribe(
      result => {
        this.categories = result;
      }
    );
  }


}
