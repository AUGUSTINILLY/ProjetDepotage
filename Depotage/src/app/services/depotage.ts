import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depotage } from '../models/depotage';

@Injectable({
  providedIn: 'root'
})
export class DepotageService {
  private baseUrl = 'http://localhost:8080/api/depotage';

  constructor(private http: HttpClient) { }

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
}
