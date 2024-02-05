import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Depot } from 'src/app/models/depot';
import { Livraison } from 'src/app/models/livraison';
import { LivaisonService } from 'src/app/services/livaison.service';

@Component({
  selector: 'app-createlivraison',
  templateUrl: './createlivraison.component.html',
  styleUrls: ['./createlivraison.component.css']
})
export class CreatelivraisonComponent implements OnInit{
  livraison: Livraison = new Livraison();
  submitted = false;
  depot: Depot= new Depot();
  caFor: boolean =false;
  caCar: boolean =true;
  resume: boolean =true;
  bon: boolean =true;
  verif: boolean =true;

  fournisseurForm: FormGroup;
  carburantForm: FormGroup;
  validationForm: FormGroup;
  progression: number = 0;


  progressBar: number = 0;


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
        cout: ['', Validators.required]
      });
  
      this.validationForm = this.fb.group({
        conforme: [false, Validators.requiredTrue]
      });
    }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.livraison = new Livraison();
  }

  save(): void {
    this.livraisonService.createLivraison(this.depot).subscribe(data => {
      this.router.navigate(['/liste']);
      console.log(data);
    });
  }

  
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/liste']);
  }
  cacherFournisseur() {
    this.progressBar= 33;
    this.caFor = true;
    this.caCar = false;

  }
  /*afficerCarburant() {
    this.caCar = false;
    this.progressBar= 66;
    this.caFor = false;
  }
*/
  afficerResumer() {
    this.caCar = true;
    this.progressBar= 66;
    this.caFor = true;
    this.verif =false;
    this.resume = false;

  }
  verification(){
    this.progressBar = 100;
    this.bon= false;
    this.verif = true;
  }
  soumettreFournisseur() {
    if (this.fournisseurForm.valid) {
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
  /*
  incrementeProgression(pourcentage: this.progression){
    this.pourcentage = this.progression;
    this.progression = 66;
  }*/
  soumettreValidation() {
    if (this.validationForm.valid) {
      // Validez les informations conformément aux exigences réglementaires
      this.progression = 100;
    }
  }

  incrementProgression(){
    if( this.progression < 100 ){
      if( this.progression == 66 ){
        this.progression += 34;
      }else{
        this.progression += 33;
      }
    }
  }

  decrementtProgression(){
    if( this.progression > 0 ){
      if( this.progression == 100 ){
        this.progression -= 34;
      }else{
        this.progression -= 33;
      }
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
        prodConforme: this.validationForm.get('conforme')?.value || false,
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
