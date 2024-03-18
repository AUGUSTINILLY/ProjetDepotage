import { LivaisonService } from 'src/app/services/livaison.service';
import { Livraison } from 'src/app/models/livraison';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Depotage } from 'src/app/models/depotage';
import { DepotageService } from 'src/app/services/depotage';
import { Cuve } from 'src/app/models/cuve';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit{

  depotages: Depotage[]= [];
  depotagefilter: Depotage[]= [];
  livraison: Livraison = new Livraison();
  livraisons : Livraison[]= [];
  listeCuve : Livraison[]= [];
  sommeQuantiteCarburant: number = 0;
  dateLivraison: string = "";
  message: string = "";
  dateAuj: Date = new Date();
  mois: string = "";
  nom: string = "";
  nombre: number = 0;
  isClick: boolean = false;
  isClick2: boolean = false;
  errorExist: boolean = false;
  constructor(
    private router: Router,
    private depotageService: DepotageService,
    private livaisonService: LivaisonService,
  ){}

  ngOnInit(): void {
    this.liste();

  }

  getLivraison(): void{

    if(this.dateLivraison){
      this.isClick2 = false;
      this.isClick = false;
      this.livraisons = [];
      this.livaisonService.getDepotageList().subscribe(
        (response: Livraison[]) => {
          response.forEach(livraison => {
            if (livraison.date === this.dateLivraison){
              this.livraison = livraison;
            }
          });
          this.livraisons.push(this.livraison);
          this.dateLivraison = "";
        }
      );
    }

  }
  liste() {
    this.isClick2 = true;
    this.livraisons = [];
    this.livaisonService.getDepotageList().subscribe(
      result => {
        this.livraisons = result;
        this.sommeQuantiteCarburant = 0;
        this.livraisons.forEach(livraison => {
          this.sommeQuantiteCarburant += livraison.quantite; // Supposons que 'quantite' est le champ contenant la quantité de carburant livré
        });
        this.nombre=this.livraisons.length;
        if(this.livraisons.length <= 0) {
          this.message ="Aucune Livraison Enregistrée dans la base de données."
        }
        console.log(this.livraisons);
      }
    );
  }


  ListeLivraison(): void {
    this.isClick2 = true;
    this.isClick = false;
    this.livraisons = [];
    this.livaisonService.getDepotageList().subscribe(
      (response: Livraison[]) => {
        // Filtrer les livraisons pour obtenir celles faites ce mois-ci
        const livraisonsCeMois = response.filter(livraison => {
          // Obtenir la date de la livraison au format Date
          const dateLivraison = new Date(livraison.date);
          // Obtenir la date d'aujourd'hui
          const aujourdHui = new Date();
          // Vérifier si la livraison a été faite ce mois-ci
          return dateLivraison.getMonth() === aujourdHui.getMonth() && dateLivraison.getFullYear() === aujourdHui.getFullYear();
        });


        this.livraisons = livraisonsCeMois;
        if(this.livraisons.length <= 0) {
          this.message ="Aucune Livraison Enregistrée dans la base de données.";
          this.errorExist = true;
        }
        this.nombre=this.livraisons.length;
        this.sommeQuantiteCarburant = 0;
        this.livraisons.forEach(livraison => {
          this.sommeQuantiteCarburant += livraison.quantite; // Supposons que 'quantite' est le champ contenant la quantité de carburant livré
        });
        console.log('Somme des quantités de carburant livré : ', this.sommeQuantiteCarburant);

        console.log(this.livraisons);
      },
      error => {
        console.log(error);
      }
    );
  }

  ListeLivraisonCuve1(): void {
    this.isClick2 = false;
    this.isClick = true;
    this.nom = "Cuve1_Super"
    this.livraisons = [];
    this.livaisonService.getDepotageList().subscribe(
      (response: Livraison[]) => {
        // Filtrer les livraisons pour obtenir celles faites ce mois-ci
        const livraisonsCeMois = response.filter(livraison => {
          // Obtenir la date de la livraison au format Date
          const dateLivraison = new Date(livraison.date);
          // Obtenir la date d'aujourd'hui
          const aujourdHui = new Date();
          // Vérifier si la livraison a été faite ce mois-ci
          return dateLivraison.getMonth() === aujourdHui.getMonth() && dateLivraison.getFullYear() === aujourdHui.getFullYear();
        });
        const livraisonCuve1 = livraisonsCeMois.filter(livraison => livraison.depotage.cuve.idCuve === 1);


        this.livraisons = livraisonCuve1;
        if(this.livraisons.length <= 0) {
          this.message ="Aucune Livraison Enregistrée dans la base de données.";
          this.errorExist = true;
        }
        this.nombre=this.livraisons.length;
        this.sommeQuantiteCarburant = 0;
        this.livraisons.forEach(livraison => {
          this.sommeQuantiteCarburant += livraison.quantite; // Supposons que 'quantite' est le champ contenant la quantité de carburant livré
        });
        console.log('Somme des quantités de carburant livré : ', this.sommeQuantiteCarburant);

        console.log(this.livraisons);
      },
      error => {
        console.log(error);
      }
    );
  }
  ListeLivraisonCuve2(): void {
    this.isClick2 = false;
    this.isClick = true;
    this.nom = "Cuve2_Super";
    this.livraisons = [];
    this.livaisonService.getDepotageList().subscribe(
      (response: Livraison[]) => {
        // Filtrer les livraisons pour obtenir celles faites ce mois-ci
        const livraisonsCeMois = response.filter(livraison => {
          // Obtenir la date de la livraison au format Date
          const dateLivraison = new Date(livraison.date);
          // Obtenir la date d'aujourd'hui
          const aujourdHui = new Date();
          // Vérifier si la livraison a été faite ce mois-ci
          return dateLivraison.getMonth() === aujourdHui.getMonth() && dateLivraison.getFullYear() === aujourdHui.getFullYear();
        });
        const livraisonCuve1 = livraisonsCeMois.filter(livraison => livraison.depotage.cuve.idCuve === 2);


        this.livraisons = livraisonCuve1;
        if(this.livraisons.length <= 0) {
          this.errorExist = true;
          this.message ="Aucune Livraison Enregistrée dans la base de données.";
        }
        this.nombre=this.livraisons.length;
        this.sommeQuantiteCarburant = 0;
        this.livraisons.forEach(livraison => {
          this.sommeQuantiteCarburant += livraison.quantite; // Supposons que 'quantite' est le champ contenant la quantité de carburant livré
        });
        console.log('Somme des quantités de carburant livré : ', this.sommeQuantiteCarburant);

        console.log(this.livraisons);
      },
      error => {
        console.log(error);
      }
    );
  }
  ListeLivraisonCuve3(): void {
    this.isClick2 = false;
    this.isClick = true;
    this.nom = "Cuve_Gaz-oil";
    this.livraisons = [];
    this.livaisonService.getDepotageList().subscribe(
      (response: Livraison[]) => {
        // Filtrer les livraisons pour obtenir celles faites ce mois-ci
        const livraisonsCeMois = response.filter(livraison => {
          // Obtenir la date de la livraison au format Date
          const dateLivraison = new Date(livraison.date);
          // Obtenir la date d'aujourd'hui
          const aujourdHui = new Date();
          // Vérifier si la livraison a été faite ce mois-ci
          return dateLivraison.getMonth() === aujourdHui.getMonth() && dateLivraison.getFullYear() === aujourdHui.getFullYear();
        });
        const livraisonCuve1 = livraisonsCeMois.filter(livraison => livraison.depotage.cuve.idCuve === 3);


        this.livraisons = livraisonCuve1;
        if(this.livraisons.length <= 0) {
          this.errorExist = true;
          this.message ="Aucune Livraison Enregistrée dans la base de données.";
        }
        this.nombre=this.livraisons.length;
        this.sommeQuantiteCarburant = 0;
        this.livraisons.forEach(livraison => {
          this.sommeQuantiteCarburant += livraison.quantite; // Supposons que 'quantite' est le champ contenant la quantité de carburant livré
        });
        console.log('Somme des quantités de carburant livré : ', this.sommeQuantiteCarburant);

        console.log(this.livraisons);
      },
      error => {
        console.log(error);
      }
    );
  }



}
