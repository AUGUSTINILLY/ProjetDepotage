import { DepotageService } from 'src/app/services/depotage';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depotage } from 'src/app/models/depotage';
import { Livreur } from 'src/app/models/livreur';
import { Cuve } from 'src/app/models/cuve';
import { Produit } from 'src/app/models/produit';
import { CuveService } from 'src/app/services/cuve';
import { ProduitService } from 'src/app/services/produitService';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number=0;
  depotage: Depotage= new Depotage();
  nouveauLivreur: Livreur = new Livreur();
  cuve: Cuve= new Cuve();
  cuves: Cuve[] = [];
  produits: Produit[] = [];
  produit: Produit = new Produit();


  constructor(private route: ActivatedRoute,
    private router: Router,
    private cuveService: CuveService,
    private produitService: ProduitService,
    private depotageService: DepotageService) { }

  ngOnInit() {

    this.id = +this.route.snapshot.params['id'];

    this.getdepot(this.id);
    this.getAllCuves();
    this.getAllProduits();
  }

  update() {
    this.depotageService.updateDepotage(this.id, this.depotage)
      .subscribe(data => {
        this.router.navigate(['/details/' + this.depotage.id]);
        console.log(data)
      });
  }

  onSubmit() {
    this.update();
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

  gotoList() {
    this.router.navigate(['/liste']);
  }
  getdepot(id: number): void{
    this.depotageService.getDepotage(id).subscribe( data =>{
      this.depotage= data;
      console.log(data);
    });

  }
}
