import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
