import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuve } from '../models/cuve';
import { UpdateQuantiteDto } from '../models/updateQuantiteDto';

@Injectable({
  providedIn: 'root'
})
export class CuveService {
  private baseUrl = 'http://localhost:8080/api/cuve';
  private Url = 'http://localhost:8080/api/cuveQuantite';


  constructor(private http: HttpClient) { }

  getCuve(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCuve(depot: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, depot);
  }
  updateCuve(id: number, cuve: Cuve): Observable<Cuve> {
    return this.http.put<Cuve>(`${this.baseUrl}/${id}`, cuve);
  }


  updateQuantiteCuve(id: number, quantiteToAdd: number) {
    const dto = new UpdateQuantiteDto(quantiteToAdd);
    return this.http.put(`${this.Url}/${id}`, dto);
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
