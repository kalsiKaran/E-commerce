import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcomDataService {

  _url:any = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getData(){
    return this.http.get(this._url);
  }
}
