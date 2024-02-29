import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livreur } from '../models/livreur';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private baseUrl = 'http://localhost:8080/api/personne';

  constructor(private http: HttpClient) { }

  getLivreur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLivreur(livreur: Livreur): Observable<Livreur> {
    return this.http.post<Livreur>(this.baseUrl, livreur);
  }


  updateLivreur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteLivreur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  public getAllLivreurs =(): Observable<Livreur[]> =>{
    return this.http.get<Livreur[]>(this.baseUrl);
  }
}
