import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

  

export class UserlistComponent implements OnInit {
  isupdated: boolean;
   constructor(private userservice: UserService,private router:Router){ }
   userList: Observable<any[]>;
   ngOnInit() {
   this.userservice.getAllUser().subscribe(data => {
   this.userList = data;
   })
   
    }
   deleteuser(user:User){
   this.userservice.deleteuser(user.id).subscribe(data=>{
  this.userservice.getAllUser().subscribe(data=>{this.userList=data;});
   });
  }
   
   updateUser(user : User ) {
  window.localStorage.removeItem("edit-id");
   window.localStorage.setItem("edit-id", user.id.toString());
   this.router.navigate(['signup']);
   }
   }
   
   
   
   
   
   
   
   
  
  