import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Ipo } from './ipo';


@Injectable({
  providedIn: 'root'
})
export class IpoService {

  private baseUrl = 'http://localhost:8081/ipo/ipo/';  
  
  constructor(private http:HttpClient) { }  
  
  getAllIpo(): Observable<any> {  
    return this.http.get(this.baseUrl+'getAllIpo');  
  }  
  
  saveIpo(ipo: object): Observable<object> {  
    return this.http.post(this.baseUrl+'saveIpo', ipo);  
  }  
  
  deleteIpo(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'deleteIpo/'+id);
    }   
  
    find4(id: number): Observable<any> {  
      return this.http.get<Ipo>(this.baseUrl+'find4/'+id);  
    }  
    
    updateIpo(id: number, value: any): Observable<Object> {  
      return this.http.post<Ipo>(this.baseUrl+'updateIpo/'+id, value);  
    }  
    
}  