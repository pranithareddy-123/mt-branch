import { Component, OnInit } from '@angular/core';
import { IpoService } from '../ipo.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Ipo } from '../ipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipolist',
  templateUrl: './ipolist.component.html',
  styleUrls: ['./ipolist.component.css']
})
export class IpolistComponent implements OnInit {

  isupdated: boolean;
  constructor(private iposervice: IpoService,private router:Router) { }
  ipoList: Observable<any[]>;
  ngOnInit() {
  this.iposervice.getAllIpo().subscribe(data => {
  this.ipoList = data;
  })
  
}
deleteIpo(ipo:Ipo){
  this.iposervice.deleteIpo(ipo.id).subscribe(data=>{
 this.iposervice.getAllIpo().subscribe(data=>{this.ipoList=data;});
  });
 }

 updateIpo(ipo : Ipo ) {
  window.localStorage.removeItem("edit-id");
   window.localStorage.setItem("edit-id", ipo.id.toString());
   this.router.navigate(['ipo']);
   }
  }
 