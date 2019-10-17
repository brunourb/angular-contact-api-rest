
import { environment } from './../../environments/environment';
import { Iservice } from './../generic/iservice';
import { Injectable } from '@angular/core';
import { Albums } from './albums';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService implements Iservice<Albums> {

  ENDPOINT = environment.URL_API_GATEWAY+'albums';

  //injeção de dependência no angular
  constructor( private http: HttpClient){
  }


  post(data: Albums): Observable<Albums> {
    return this.http.post<Albums>(this.ENDPOINT,data);
  }
  put(data: Albums, id?: number): Observable<Albums> {
    return this.http.put<Albums>(this.ENDPOINT+id,data);
  }
  patch(data: Albums): Observable<Albums> {
    return this.http.patch<Albums>(this.ENDPOINT,data);
  }
  getAll(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.ENDPOINT);
  }
  getById(id?: number): Observable<Albums> {
    return this.http.get<Albums>(this.ENDPOINT+id);
  }
  deleteById(id?: number) {
    return this.http.delete(this.ENDPOINT+id);
  }
  delete(data: Albums) {
    throw new Error("Method not implemented.");
  }
}
