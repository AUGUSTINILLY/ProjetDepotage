import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  inscription(nouvelUtilisateur: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscription`, nouvelUtilisateur);
  }

  validationCompte(codeValidation: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/validation`, { code: codeValidation });
  }

  connexion(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/connexion`, credentials);
  }
}
/*
inscription(nouvelUtilisateur: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscription`, nouvelUtilisateur);
  }

  validationCompte(codeValidation: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/validation`, { code: codeValidation });
  }

  connexion(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/connexion`, credentials);
  }
*/
