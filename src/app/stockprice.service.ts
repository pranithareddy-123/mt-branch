import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockprice } from './stockprice';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {

  private baseUrl = 'http://localhost:8081/stockprice/stockprice/';  
  
  constructor(private http:HttpClient) { }  
  
  getAllStockprice(): Observable<any> {  
    return this.http.get<Stockprice>(this.baseUrl+'getAllStockprice');  
  }  
  
  SaveStockprice(stockprice: object): Observable<object> {  
    return this.http.post<Stockprice>(this.baseUrl+'saveStockprice', stockprice);  
  }  
  
  deleteStockprice(companyCode:String):Observable<any>{
    return this.http.delete<Stockprice>(this.baseUrl+'deleteStockprice/'+companyCode);
    }
  
  find1(companyCode: String): Observable<any> {  
    return this.http.get<Stockprice>(this.baseUrl+'find1/'+companyCode);  
  }  
  
  updateStockprice(companyCode: String, value: any): Observable<any> {  
    return this.http.post<Stockprice>(this.baseUrl+'updateStockprice/'+companyCode, value);  
  }  
  getmultiplelinechart(): Observable<any> {







    return this.http.get(`${this.baseUrl}`+'/multiplelinechart');
  
  
  
  
  
  
  
    }
  
  
  
  
  
  
  
    uploadFile(file: File, companyCode: String): Observable<any> {
  
  
  
  
  
  
  
    let url = this.baseUrl + "uploadfile/" + companyCode;
  
  
  
  
  
  
  
    const formdata: FormData = new FormData();
  
  
  
  
  
  
  
    formdata.append('file', file);
  
  
  
  
  
  
  
    return this.http.post(url, formdata);
  }
  }  