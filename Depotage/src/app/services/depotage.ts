import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depotage } from '../models/depotage';

@Injectable({
  providedIn: 'root'
})
export class DepotageService {
  private baseUrl = 'http://localhost:8080/api/depotage';
  private Url = 'http://localhost:8080/api/updateQuantiteCarburant';


  constructor(private http: HttpClient) { }
/*
  getDepotage(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDepotage(depotage: Depotage): Observable<any> {
    return this.http.post(`${this.baseUrl}`, depotage);
  }


  updateDepotage(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDepotage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDepotageList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
*/
   getDepotageList(): Observable<Depotage[]> {
    return this.http.get<Depotage[]>(this.baseUrl);
  }

  getDepotage(id: number): Observable<Depotage> {
    return this.http.get<Depotage>(`${this.baseUrl}/${id}`);
  }

  createDepotage(depotage: Depotage): Observable<Depotage> {
    return this.http.post<Depotage>(this.baseUrl, depotage);
  }

  updateDepotage(id: number, depotage: Depotage): Observable<Depotage> {
    return this.http.put<Depotage>(`${this.baseUrl}/${id}`, depotage);
  }
  updateQuantiteCarburant(cuveId: number, quantiteLivre: number): Observable<any> {
    return this.http.put(`${this.Url}/${cuveId}`, { quantiteLivre });
  }

  deleteDepotage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
