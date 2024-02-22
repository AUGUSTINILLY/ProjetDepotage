import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuve } from '../models/cuve';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseUrl = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) { }

  getCategorie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCategorie(depot: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, depot);
  }


  updateCategorie(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  /*getCategoriesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }*/
  public getAllCategorie =(): Observable<Categorie[]> =>{
    return this.http.get<Categorie[]>(this.baseUrl);
  }

}
