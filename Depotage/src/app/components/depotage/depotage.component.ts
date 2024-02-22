import { HttpClient } from '@angular/common/http';
import { Carburant } from './../../models/carburant';
import { CategorieService } from './../../services/categorie';
import { Router } from '@angular/router';
import { DepotageService } from './../../services/depotage';
import { Component, OnInit } from '@angular/core';
import { Depotage } from 'src/app/models/depotage';
import { Observable } from 'rxjs';
import { Cuve } from 'src/app/models/cuve';
import { CuveService } from 'src/app/services/cuve';
import { LivaisonService } from 'src/app/services/livaison.service';
import { CarbuurantService } from 'src/app/services/carburant';
import { Categorie } from 'src/app/models/categorie';
import { PersonneService } from 'src/app/services/personne';
import { Livreur } from 'src/app/models/livreur';

@Component({
  selector: 'app-depotage',
  templateUrl: './depotage.component.html',
  styleUrls: ['./depotage.component.css']
})
export class DepotageComponent implements OnInit{
  cuve: Cuve= new Cuve();
  depotages: Depotage[] = [];
  cuves: Cuve[] = [];;
  category: Categorie = new Categorie();
  categories: Categorie[] = [];
  selectcategory: Categorie = new Categorie();
  selectCuve: Cuve = new Cuve();
  selectCarburant: Carburant = new Carburant();
  selectLivreur: Livreur = new Livreur();
  depotage: Depotage = new Depotage();
  carburant: Carburant = new Carburant();
  carburants: Carburant[] = [];
  livreur: Livreur = new Livreur();
  livreurs: Livreur[] = [];
  public isOk: boolean = false;



  constructor(private router: Router, private cuveService: CuveService,private personneService: PersonneService,private depotageService: DepotageService, private carburantService: CarbuurantService, private categorieService: CategorieService){

  }
  ngOnInit() {
    this.getAllCategories();
    this.getAllCarburants();
    this.getAllCuves();
    this.getAllLivreurs();
  }


  save(){

      this.depotage.cuve = this.selectCuve;
      this.depotage.carburant = this.selectCarburant;
      this.depotage.livreur.nomLivreur
      this.depotageService.createDepotage(this.depotage).subscribe(
        result => {
          this.depotage = new Depotage();
          this.getAll();
          console.log(result);

        }
      )


  }
  getAll(){
    this.depotages=[];
    this.depotageService.getDepotageList().subscribe(
      result => {
        this.depotages = result;

      }
    )
  }

  getAllCategories(){
    this.categories=[];
    this.categorieService.getAllCategorie().subscribe(
      result => {
        this.categories = result;

      }
    )
  }
  getAllCarburants(){
    this.carburants=[];
    this.carburantService.getAllCarburant().subscribe(
      result => {
        this.carburants = result;

      }
    )
  }

  getAllCuves(){
    this.cuves=[];
    this.cuveService.getAllCuves().subscribe(
      result => {
        this.cuves = result;

      }
    )
  }
  getAllLivreurs(){
    this.livreurs=[];
    this.personneService.getAllLivreurs().subscribe(
      result => {
        this.livreurs = result;

      }
    )
  }


}
