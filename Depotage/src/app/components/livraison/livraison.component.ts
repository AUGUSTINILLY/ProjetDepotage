import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Depot } from 'src/app/models/depot';
import { LivaisonService } from 'src/app/services/livaison.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit{


  depot: Depot = new Depot();


  fournisseurForm: FormGroup;
  carburantForm: FormGroup;
  progression: number = 0;

  monNom?: any;

  constructor(private router: Router, private fb: FormBuilder, private livraisonService: LivaisonService) {
    this.fournisseurForm = this.fb.group({
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      cnib: ['', Validators.required]
    });

    this.carburantForm = this.fb.group({
      date: ['', Validators.required],
      heure: ['', Validators.required],
      quantite: ['', Validators.required],
      densite: ['', Validators.required],
      cout: ['', Validators.required],
      conforme: [false, Validators.requiredTrue]
    });


    
  }
  ngOnInit(): void {
  }

  // Fonctions pour soumettre chaque section du formulaire
  soumettreFournisseur() {
    if (this.fournisseurForm.valid) {
      this.monNom=this.fournisseurForm.get('prenom')?.valueChanges.subscribe(value => console.log(value));
      // Enregistrez les informations sur le fournisseur
      this.progression = 33;
    }
  }

  soumettreCarburant() {
    if (this.carburantForm.valid) {
      // Enregistrez les informations sur le carburant
      this.progression = 66;
    }
  }
 
  retour(){
    this.progression = 0;
    this.fournisseurForm = this.fb.group({
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required]
    });

    this.carburantForm = this.fb.group({
      quantite: ['', Validators.required],
      densite: ['', Validators.required]
    });

    
  }
  
  incrementProgression(){
    if( this.progression < 100 ){
      this.progression += 50;
      
    }
  }

  decrementtProgression(){
    if( this.progression > 0 ){
      
      this.progression -= 50;
      
    }
  }

  // Fonction pour enregistrer la livraison
 
  enregistrerLivraison(): void {
    if (this.fournisseurForm.valid && this.carburantForm.valid) {
      const livraisonData: Depot = {
        livNom: this.fournisseurForm.get('prenom')?.value || 'introuvale',
        livemail: this.fournisseurForm.get('email')?.value || 'introuvale',
        livContact: this.fournisseurForm.get('contact')?.value || 'introuvale',
        prodQuantite: this.carburantForm.get('quantite')?.value || 0,
        prodDensite: this.carburantForm.get('densite')?.value || 0,
        prodConforme: this.carburantForm.get('conforme')?.value || false,
        id: 0
      };

      this.livraisonService.createLivraison(livraisonData).subscribe(
        (response) => {
          console.log('Livraison enregistrée avec succès :', response);
          // Réinitialiser les formulaires après l'enregistrement
          this.fournisseurForm.reset();
          this.carburantForm.reset();
          this.router.navigate(['/liste']);
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement de la livraison :', error);
        }
      );
    } else {
      console.error('Veuillez remplir tous les champs correctement.');
    }
  }


}
