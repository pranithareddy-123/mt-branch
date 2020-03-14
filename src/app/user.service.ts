import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable, from } from 'rxjs';  
  import{User} from './user';
@Injectable({  
  providedIn: 'root'  
})  
  
export class UserService {
  
  
  private baseUrl = 'http://localhost:8081/user/UserPortal/';  
  
  constructor(private http:HttpClient) { }  
  
  getAllUser(): Observable<any> {  
    return this.http.get(this.baseUrl+'getAllUser');  
  }  
  
  createUser(user: object): Observable<object> {  
    return this.http.post(this.baseUrl+'saveuser', user);  
  }  
  
  deleteuser(id:number):Observable<object>{
    return this.http.delete<User>(this.baseUrl+'deleteuser/'+id);
    }  
  
  find(id: number): Observable<User> {  
    return this.http.get<User>(this.baseUrl+'find/'+id);  
  }  
  
  updateUser(id: number, value: any): Observable<object> {  
    return this.http.post<User>(this.baseUrl+'updateUser/'+id, value);  
  }  
  findByUserNameAndPassword(userName:String, password:String):Observable<User>{
return this.http.get<User>(this.baseUrl+'/findByUserNameAndPassword/'+userName+'/'+password);
  
   }
   uploadFile( file: File , id : number ) : Observable<any>  
   {  
     let url = this.baseUrl + "uploadImage/" + id ;  
   
     const formdata: FormData = new FormData();  
     
     formdata.append('file', file);  
    
     return this.http.post(url , formdata);  
   }  
  
  
}  