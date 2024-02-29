import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Vérifier si l'utilisateur est connecté
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
      this.router.navigate(['/login']);
      return false;
    }
  }
}
