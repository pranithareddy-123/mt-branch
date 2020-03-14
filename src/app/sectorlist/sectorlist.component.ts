import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SectorService } from '../sector.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Sector } from '../sector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectorlist',
  templateUrl: './sectorlist.component.html',
  styleUrls: ['./sectorlist.component.css']
})
export class SectorlistComponent implements OnInit {

  
 constructor(private sectorservice: SectorService,private router:Router) { }
 sectorList: Observable<any[]>;
 ngOnInit() {
 this.sectorservice.getAllSectordata().subscribe(data => {
 this.sectorList = data;
 })
 
  }
  
  deleteSectorData(sectordata:Sector){
    this.sectorservice.deleteSectorData(sectordata.id).subscribe(data=>{
   this.sectorservice.getAllSectordata().subscribe(data=>{this.sectorList=data;});
    });
   }
   updateSectordata(sectordata : Sector ) {
    window.localStorage.removeItem("edit-id");
     window.localStorage.setItem("edit-id", sectordata.id.toString());
     this.router.navigate(['sector']);
     }
    }
   
   
 


