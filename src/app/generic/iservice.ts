import { Observable } from "rxjs";

//https://www.typescriptlang.org/docs/handbook/generics.html
export interface Iservice<T> {

  post(data : T) : Observable<T>;
  put(data : T, id? : number): Observable<T>;
  patch(data: T) : Observable<T>;
  getAll(): Observable<T[]>; //Array<T>;
  getById(id? : number) : Observable<T>;
  deleteById(id? : number);
  delete(data : T);
}
