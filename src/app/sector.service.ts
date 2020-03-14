import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from './sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private baseUrl = 'http://localhost:8081/sectordata/sectordata/';  
  
  constructor(private http:HttpClient) { }  
  
  getAllSectordata(): Observable<any> {  
    return this.http.get(this.baseUrl+'getAllSectordata');  
  }  
  
  SaveSectorData(sector: object): Observable<object> {  
    return this.http.post(this.baseUrl+'savesectordata', sector);  
  }  
  deleteSectorData(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'deleteSectorData/'+id);
    }  
  find3(id: number): Observable<any> {  
    return this.http.get<Sector>(this.baseUrl+'find3/'+id);  
  }  
  
  updateSectordata(id: number, value: any): Observable<Object> {  
    return this.http.post(this.baseUrl+'updateSectordata/'+id, value);  
  }  
    
}  