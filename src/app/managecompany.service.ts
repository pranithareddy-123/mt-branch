import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, from } from 'rxjs';
import { CompanydataComponent } from './companydata/companydata.component';
@Injectable({
  providedIn: 'root'
})
export class ManagecompanyService {
  private baseUrl = 'http://localhost:8081/companydata/company/'; 

  constructor(private http:HttpClient) { }
  getAllCompany(): Observable<any> {  
    return this.http.get(this.baseUrl+'getAllCompany');  
  }  
  
  saveCompany(company: any): Observable<any> {  
    return this.http.post<any>(this.baseUrl+'saveCompany', company);  
  }  
  deleteCompany(companyName:String):Observable<any>{
    return this.http.delete(this.baseUrl+'deleteCompany/'+companyName);
    }   
  
  find5(companyName: String): Observable<any> {  
    return this.http.get<any>(this.baseUrl+'find5/'+companyName);  
  }  
  
  updateCompany(companyName: String, value: any): Observable<any> {  
    return this.http.post<any>(this.baseUrl+'updateUser/'+companyName, value);  
  }    
}  

