import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Utilisateur } from '../models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentifcationService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private apiUrl = 'http://localhost:8080/api/connexion'; // API URL
  private baseUrl = 'http://localhost:8080/api/inscription'; // API URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.apiUrl}`, { username, password })
    .pipe(
      tap(() => {
        // Mettre à jour l'état de connexion après une connexion réussie
        this.loggedIn.next(true);
      })
    );
  }

  logout(): void {
    // Supprimer les informations d'authentification stockées localement
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, user);
  }
  getUserInfos(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${id}`);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
