import { Component, OnInit } from '@angular/core';
import { ManagecompanyService } from '../managecompany.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Managecompany } from '../managecompany';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companydata',
  templateUrl: './companydata.component.html',
  styleUrls: ['./companydata.component.css']
})
export class CompanydataComponent implements OnInit {

  
 constructor(private managecompanyservice: ManagecompanyService,private router:Router) { }
 companydata: Observable<any[]>;
 ngOnInit() {
 this.managecompanyservice.getAllCompany().subscribe(data => {
 this.companydata = data;
 })
 
  }

  deleteCompany(managecompany:Managecompany){
  this.managecompanyservice.deleteCompany(managecompany.companyName).subscribe(data=>{
 this.managecompanyservice.getAllCompany().subscribe(data=>{this.companydata=data;});
  });
}

updateCompany(managecompany : Managecompany ) {
  window.localStorage.removeItem("edit-companyName");
   window.localStorage.setItem("edit-companyName",managecompany.companyName.toString());
   this.router.navigate(['managecompany']);
   }
}


