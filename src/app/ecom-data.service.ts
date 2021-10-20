import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataInterface } from './dataInterface';

@Injectable({
  providedIn: 'root'
})
export class EcomDataService {

  _url:any = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getData():Observable<dataInterface[]>{
    return this.http.get<dataInterface[]>(this._url);
  }
}
