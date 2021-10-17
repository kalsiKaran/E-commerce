import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iEmployee } from './type-todo';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  _url:any = 'https://inshortsapi.vercel.app/news?category=science';  

  constructor(private http:HttpClient) { }

  getServiceData():Observable<iEmployee[]>{
    return this.http.get<iEmployee[]>(this._url);
  }
}
