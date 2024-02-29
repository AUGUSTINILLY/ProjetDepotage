import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'http://localhost:8080/api/produit';

  constructor(private http: HttpClient) { }

  getProduit(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduit(depot: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, depot);
  }


  updateProduit(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  public getAllProduit =(): Observable<Produit[]> =>{
    return this.http.get<Produit[]>(this.baseUrl);
  }

}
