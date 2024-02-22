import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carburant } from '../models/carburant';

@Injectable({
  providedIn: 'root'
})
export class CarbuurantService {
  private baseUrl = 'http://localhost:8080/api/carburant';

  constructor(private http: HttpClient) { }

  getCarburant(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCarburant(depot: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, depot);
  }

  creerCarburant(fournisseurData: Object, carburantData: Object): Observable<Object> {
    const depot = {
      fournisseur: fournisseurData,
      carburant: carburantData
    };
    return this.http.post(`${this.baseUrl}`, depot);
  }

  updateCarburant(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCarburant(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCarburantList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  public getAllCarburant =(): Observable<Carburant[]> =>{
    return this.http.get<Carburant[]>(this.baseUrl);
  }
}
