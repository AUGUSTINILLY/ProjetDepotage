import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuve } from '../models/cuve';

@Injectable({
  providedIn: 'root'
})
export class CuveService {
  private baseUrl = 'http://localhost:8080/api/cuve';

  constructor(private http: HttpClient) { }

  getCuve(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCuve(depot: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, depot);
  }

  updateCuve(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCuve(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  /*getCuvesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }*/
  public getAllCuves =(): Observable<Cuve[]> =>{
    return this.http.get<Cuve[]>(this.baseUrl);
  }

}
