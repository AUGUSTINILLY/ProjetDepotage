import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentifcationService {

  private apiUrl = 'http://localhost:8080/api/connexion'; // API URL
  private baseUrl = 'http://localhost:8080/api/inscription'; // API URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, { username, password });
  }

  logout(): void {
    // Supprimer les informations d'authentification stockées localement
    localStorage.removeItem('currentUser');
  }
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, user);
  }
}
