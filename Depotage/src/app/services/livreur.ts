import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getLivreur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLivreur(depot: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, depot);
  }

  updateLivreur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteLivreur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getLivreursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
