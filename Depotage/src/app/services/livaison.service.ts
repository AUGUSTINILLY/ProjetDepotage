import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraison } from '../models/livraison';

@Injectable({
  providedIn: 'root'
})
export class LivaisonService {
  private baseUrl = 'http://localhost:8080/api/livraison';

  constructor(private http: HttpClient) { }

  getDepotageList(): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(this.baseUrl);
  }

  getDepotage(id: number): Observable<Livraison> {
    return this.http.get<Livraison>(`${this.baseUrl}/${id}`);
  }

  createDepotage(livraison: Livraison): Observable<Livraison> {
    return this.http.post<Livraison>(this.baseUrl, livraison);
  }

  updateDepotage(id: number, livraison: Livraison): Observable<Livraison> {
    return this.http.put<Livraison>(`${this.baseUrl}/${id}`, livraison);
  }

  deleteDepotage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
