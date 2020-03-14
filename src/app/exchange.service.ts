import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exchange } from './exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private baseUrl = 'http://localhost:8081/stockexchange/stockexchange/';  
  
  constructor(private http:HttpClient) { }  
  
  getAllStockexchange(): Observable<any> {  
    return this.http.get(this.baseUrl+'getAllStockexchange');  
  }  
  
  saveStockexchange(exchange: object): Observable<object> {  
    return this.http.post(this.baseUrl+'saveStockexchange', exchange);  
  }  
  deleteStockexchange(id:number):Observable<object>{
    return this.http.delete(this.baseUrl+'deleteStockexchange/'+id);
    }
    find6(id: number): Observable<any> {  
      return this.http.get(this.baseUrl+'find6/'+id);  
    }  
    
  
  updateStockexchange(id: number, value: any): Observable<Object> {  
    return this.http.post<Exchange>(this.baseUrl+'updateStockexchange/'+id, value);  
  }  
    
}  