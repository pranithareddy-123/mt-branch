import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userNew:User=new User();
constructor(private router: Router, private userservice:UserService) { }
 user: User = new User();
submitted = false;
ngOnInit(){
  this.submitted = false;

 }

 usersaveform = new FormGroup({

  
  userName: new FormControl('', [Validators.required, Validators.minLength(5)]),

  password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
})

 saveUser(saveuser) {

  this.user = new User();
  this.user.userName = this.usersaveform.get('userName').value;
  this.user.password = this.usersaveform.get('password').value;
  this.submitted = true;
  this.userservice.findByUserNameAndPassword(this.user.userName, this.user.password).subscribe(data =>{

    this.userNew=data;
  
    if(this.userNew!=null && this.userNew.userType=='admin'){
  
     this.router.navigate(['adminlanding']);
  
    }
  
    else if(this.userNew!=null && this.userNew.userType=='user'){
  
     this.router.navigate(['userlanding']);
  
    }
  
    else{
  
     alert("invalid Details");
  
     // this.router.navigate(['login-page']);
  
    }
  
   },
  
     error => console.log(console.error()));
  
  }
}