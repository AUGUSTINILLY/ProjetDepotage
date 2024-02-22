import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivaisonService {
  private baseUrl = 'http://localhost:8080/api/depot';
  //private baseUrl = 'http://localhost:8080/api/livraison';

  constructor(private http: HttpClient) { }

  getLivraison(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLivraison(depot: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, depot);
  }

  creerLivraison(fournisseurData: Object, carburantData: Object): Observable<Object> {
    const depot = {
      fournisseur: fournisseurData,
      carburant: carburantData
    };
    return this.http.post(`${this.baseUrl}`, depot);
  }

  updateLivraison(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteLivraison(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getLivraisonList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
