import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
import { Managecompany } from '../managecompany';
import { ManagecompanyService } from '../managecompany.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {
  constructor(private managecompanyservice:ManagecompanyService,private router:Router) { }  
  
  company : Managecompany=new Managecompany();  
  submitted = false;  
  
  ngOnInit() { var sname = window.localStorage.getItem("edit-companyName");
  if (sname != null && sname != "") {
  this.managecompanyservice.find5(sname)
  .subscribe(data => {
  this.company = data; this.companysaveform.setValue(this.company)
  });
  }
  this.submitted = false;
  
  }
  
  companysaveform=new FormGroup({  
    companyName:new FormControl('',[Validators.required,Validators.required]),
    turnOver:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    ceo:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    boardOfDirectors:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    listinstockExchange:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    sector:new FormControl('',[Validators.required,Validators.required]), 
    brief:new FormControl('' , [Validators.required , Validators.maxLength(10) ] ),
    stockCode:new FormControl('' , [Validators.required , Validators.maxLength(10) ] ),
    

    
  });  
  
  saveCompany(saveCompany){  
    this.company=new Managecompany();     
    this.company.companyName=this.companysaveform.get('companyName').value;
    this.company.turnOver=this.companysaveform.get('turnOver').value;  
    this.company.ceo=this.companysaveform.get('ceo').value; 
    this.company.boardOfDirectors=this.companysaveform.get('boardOfDirectors').value; 
    this.company.listinstockExchange=this.companysaveform.get('listinstockExchange').value;
    this.company.sector=this.companysaveform.get('sector').value;
    this.company.brief=this.companysaveform.get('brief').value; 
    this.company.stockCode=this.companysaveform.get('stockCode').value;  
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.managecompanyservice.saveCompany(this.company)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.company = new Managecompany(); 
    window.localStorage.removeItem("edit-companyName");
    this.router.navigate(['home']) 
  }  
  companysaveForm(){
    this.submitted=false;
    this.companysaveform.reset();
  }
}
  


   
   
   
   
   
   
   
   
   