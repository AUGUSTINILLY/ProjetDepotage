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
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produitService';

@Component({
  selector: 'app-depotage',
  templateUrl: './depotage.component.html',
  styleUrls: ['./depotage.component.css']
})
export class DepotageComponent implements OnInit{

  depotage: Depotage = new Depotage();


  nouveauLivreur: Livreur = new Livreur();
  cuve: Cuve= new Cuve();
  cuves: Cuve[] = [];
  produits: Produit[] = [];
  produit: Produit = new Produit();

  /*produit: Produit = new Produit();
  cuve: Cuve= new Cuve();
  depotages: Depotage[] = [];
  cuves: Cuve[] = [];;
  category: Categorie = new Categorie();
  categories: Categorie[] = [];
  selectcategory: Categorie = new Categorie();
  selectCuve: Cuve = new Cuve();
  selectCarburant: Carburant = new Carburant();
  selectProduit: Produit = new Produit();
  produits: Produit[] = [];
  selectLivreur: Livreur = new Livreur();
  depotage: Depotage = new Depotage();
  carburant: Carburant = new Carburant();
  carburants: Carburant[] = [];
  livreur: Livreur = new Livreur();
  livreurs: Livreur[] = [];
  public isOk: boolean = false;
*/


  constructor( private router: Router,
    private cuveService: CuveService,
    private personneService: PersonneService,
    private produitService: ProduitService,
    //private carburantService: CarbuurantService,
    //private categorieService: CategorieService)
    private depotageService: DepotageService){}


  ngOnInit() {

    //this.getAllCategories();
    this.getAllCuves();
    //this.getAllLivreurs();
    this.getAllProduits();

  }


  getAllProduits(){
    this.produits=[];
    this.produitService.getAllProduit().subscribe(
      result => {
        this.produits = result;

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

  onSubmit(): void {
    this.personneService.createLivreur(this.nouveauLivreur).subscribe(newLivreur => {
      this.depotage.livreur = newLivreur;
      this.depotageService.createDepotage(this.depotage).subscribe(() => {
        console.log('Depotage créé avec succès');
        this.depotage = new Depotage();
        this.router.navigate(['/historique']); // Rediriger vers la liste des dépotages après création
      }, error => {
        console.error('Erreur lors de la création du dépotage:', error);
        // Gérer l'erreur comme souhaité, par exemple afficher un message à l'utilisateur
      });
    }, error => {
      console.error('Erreur lors de la création du livreur:', error);
      // Gérer l'erreur comme souhaité, par exemple afficher un message à l'utilisateur
    });
  }
/*
  save(){

      this.depotage.cuve = this.selectCuve;
      this.depotage.carburant = this.selectCarburant;
      this.depotage.livreur= this.selectLivreur;
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
  getAllProduits(){
    this.produits=[];
    this.produitService.getAllProduit().subscribe(
      result => {
        this.produits = result;

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

*/
}
