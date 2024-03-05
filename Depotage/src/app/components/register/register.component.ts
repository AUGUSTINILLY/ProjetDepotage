import { UserService } from './../../services/user.service';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { UtilisateurService } from './../../services/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentifcationService } from 'src/app/services/authentifcation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user = { nom: '', mdp: '', email: '', nomUser: '' };
  error = '';
  ngOnInit(): void {

  }

  constructor(private authService: AuthentifcationService, private router: Router) { }

  register(): void {
    this.authService.register(this.user).subscribe(
      response => {
        // Rediriger l'utilisateur vers la page de connexion après l'inscription réussie
        this.router.navigate(['/login']);
      },
      error => {
        this.error = 'Erreur lors de l\'inscription. Veuillez réessayer.';
      }
    );
  }


/*
  user: Utilisateur = new Utilisateur; // Modèle utilisateur
  verificationCode: string = ''; // Code de vérification

  inscriptionForm: FormGroup;
  validationForm: FormGroup;
  progression: number = 0;

  nouvelUtilisateur = {
    nom: '',
    email: '',
    mdp: '',
  };
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      mdp: ['', Validators.required],
      conf: ['', Validators.required],

    });
    this.validationForm = this.fb.group({
      code: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }
  inscrire() {
    if (this.inscriptionForm.valid) {
      // Enregistrez les informations sur le fournisseur
      this.progression = 50;
    }
  }

  validation() {
    if (this.validationForm.valid) {
      // Enregistrez les informations sur le fournisseur
      this.progression = 100;
    }
  }
}
/*
export class RegisterComponent implements OnInit{









  user: Utilisateur = new Utilisateur; // Modèle utilisateur
  verificationCode: string = ''; // Code de vérification

  constructor(private utilisateurService: UtilisateurService) {}
  ngOnInit(): void {

  }
  inscription(): void {
    this.utilisateurService.inscription(this.user).subscribe(
      (response) => {
        console.log('Inscription réussie. Veuillez vérifier votre email.');
        // Gérer la redirection ou d'autres actions après l'inscription réussie
      },
      (error) => {
        console.error('Erreur lors de l\'inscription :', error);
        // Gérer les erreurs d'inscription
      }
    );
  }

  validation(): void {
    this.utilisateurService.validation(this.verificationCode).subscribe(
      (response) => {
        console.log('Email vérifié avec succès.');
        // Gérer la redirection ou d'autres actions après la vérification réussie
      },
      (error) => {
        console.error('Erreur lors de la vérification de l\'email :', error);
        // Gérer les erreurs de vérification d'email
      }
    );
  }
}
*/
}
