import { Cuve } from 'src/app/models/cuve';
import { DepotageService } from './../../services/depotage';
import { PersonneService } from './../../services/personne';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depotage } from 'src/app/models/depotage';
import { Livraison } from 'src/app/models/livraison';
import { Livreur } from 'src/app/models/livreur';
import { CuveService } from 'src/app/services/cuve';
import { LivaisonService } from 'src/app/services/livaison.service';
import { ProduitService } from 'src/app/services/produitService';
import { Produit } from 'src/app/models/produit';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit{

  cuve: Cuve = new Cuve();
  cuves: Cuve[] = [];

  produits: Produit[] = [];

  category: Categorie = new Categorie();
  categories: Categorie[] = [];
  cuveId: number = 0;

  livraison: Livraison = new Livraison();
  depotage: Depotage = new Depotage();
  newDepotage: Depotage= new Depotage();
  livreur: Livreur = new Livreur();


  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private livraisonService : LivaisonService,
    private personneService : PersonneService,
    private depotageService : DepotageService,
    private cuveService: CuveService,
    private categoryService : CategorieService
  ){}

  ngOnInit() {

    this.getAllCuves();
    this.getAllCategories();
    this.route.params.subscribe(params => {
      this.cuveId = +params['cuveId'];
    });

  }


  getAllCategories(){
    this.categories=[];
    this.categoryService.getAllCategorie().subscribe(
      result => {
        this.categories = result;

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

  nSubmit(): void {
    //this.creerDepotage();
    this.livraison.depotage = this.newDepotage;
    console.log(this.livraison.depotage.id);
    this.livraisonService.createDepotage(this.livraison).subscribe(() => {
    }, error => {
      console.error('Erreur lors de la création du livraison:', error);
      // Gérer l'erreur comme souhaité, par exemple afficher un message à l'utilisateur

    });
  }


  onSubmit(): void {
    this.personneService.createLivreur(this.livreur).subscribe(newLivreur => {
      this.livraison.livreur = newLivreur;
      this.depotage.quantiteTheorique = this.livraison.quantite + this.depotage.quantiteAvant;
      this.depotage.ecart = this.depotage.quantiteTheorique - this.depotage.quantiteApres;
      this.depotageService.createDepotage(this.depotage).subscribe((depotage: Depotage) => {
        this.newDepotage = depotage;
        this.livraison.depotage = this.newDepotage;
        console.log(this.livraison.depotage.id);
        this.livraisonService.createDepotage(this.livraison).subscribe((livraison: Livraison) => {
          console.log('ID==', livraison.id);
          console.log('qnt==', livraison.quantite);
          this.cuveService.updateQuantiteCuve(livraison.depotage.cuve.idCuve, livraison.quantite).subscribe(result=> {
              console.log(result);
          });
          this.router.navigate(['/details/' + livraison.id]);
        }, error => {
          console.error('Erreur lors de la création du livraison:', error);
          // Gérer l'erreur comme souhaité, par exemple afficher un message à l'utilisateur

        });
      }, error => {
        console.error('Erreur lors de la création du dépotage:', error);
        // Gérer l'erreur comme souhaité, par exemple afficher un message à l'utilisateur
      });
    }, error => {
      console.error('Erreur lors de la création du livreur:', error);
      // Gérer l'erreur comme souhaité, par exemple afficher un message à l'utilisateur
    });

  }
}
