import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  
 
    
    constructor(private sectorservice:SectorService,private router:Router) { }  
    
    sector : Sector=new Sector();  
    submitted = false;  
    
    ngOnInit() {  
      var sectorid = window.localStorage.getItem("edit-id");
      if (sectorid != null && sectorid != "") {
      this.sectorservice.find3(parseInt(sectorid))
      .subscribe(data => {
      this.sector=data;this.sectorsaveform.setValue(this.sector)
      });
      }
      this.submitted = false;
      
      }
        
    
    sectorsaveform=new FormGroup({  
      id:new FormControl('',[Validators.required,Validators.required]),
      sectorName:new FormControl('' , [Validators.required , Validators.required] ),  
      brief:new FormControl('' , [Validators.required , Validators.required ] ),
      
  
      
    });  
    
    SaveSectorData(savesectordata){  
      this.sector=new Sector();     
      this.sector.id=this.sectorsaveform.get('id').value;
      this.sector.sectorName=this.sectorsaveform.get('sectorName').value;  
      this.sector.brief=this.sectorsaveform.get('brief').value; 
      
      this.submitted = true;  
      this.save();  
    }  
    
      
    
    save() {  
      this.sectorservice.SaveSectorData(this.sector)  
        .subscribe(data => console.log(data), error => console.log(error));  
      this.sector = new Sector();  
      window.localStorage.removeItem("edit-id");
    this.router.navigate(['home'])
    }  
    sectorsaveForm(){
      this.submitted=false;
      this.sectorsaveform.reset();
    }
  }
    
  
  