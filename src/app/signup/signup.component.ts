import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User } from '../user';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectedFiles: FileList;
  
  constructor(private userservice:UserService,private router:Router) { }  
  
  user : User=new User();  
  submitted = false;  
  
  ngOnInit() {  
    var userid = window.localStorage.getItem("edit-id");
if (userid != null && userid != "") {
this.userservice.find(parseInt(userid))
.subscribe(data => {
this.user = data; this.usersaveform.setValue(this.user)
});
}
this.submitted = false;

}
selectFile(event) {  
  const file = event.target.files.item(0);  
 
  if (file.type.match('image.*')) {  
    var size = event.target.files[0].size;  
    if(size > 1000000)  
    {  
        alert("size must not exceeds 1 MB");  
        this.usersaveform.get('profileImage').setValue("");  
    }  
    else  
    {  
      this.selectedFiles = event.target.files;  
    }  
  } else {  
    alert('invalid format!');  
  }  

}     


  
  usersaveform=new FormGroup({  
    id:new FormControl('',Validators.required),
    userName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    password:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    confirmed:new FormControl(),
    email:new FormControl('',[Validators.required,Validators.email]), 
    mobileNumber:new FormControl('' , [Validators.required , Validators.maxLength(10) ] ),
    userType:new FormControl(),
    profileImage:new FormControl(),
    
    

    
  });  
   
  saveuser(saveuser){  
    this.user=new User();  
    this.user.id=this.usersaveform.get('id').value;   
    this.user.userName=this.usersaveform.get('userName').value;  
    this.user.password=this.usersaveform.get('password').value; 
    this.user.confirmed='no';
    this.user.email=this.usersaveform.get('email').value;
    this.user.mobileNumber=this.usersaveform.get('mobileNumber').value;
    this.user.userType='user';
    this.user.profileImage=this.usersaveform.get('profileImage').value;
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.userservice.createUser(this.user)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.user = new User();  
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['userlist'])
  }  
}