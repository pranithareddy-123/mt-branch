import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Ipo } from '../ipo';
import { IpoService } from '../ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

  constructor(private iposervice:IpoService,private router:Router) { }  
  
  ipo : Ipo=new Ipo();  
  submitted = false;  
  
  ngOnInit() {  
    var ipoid = window.localStorage.getItem("edit-id");
    if (ipoid != null && ipoid != "") {
    this.iposervice.find4(parseInt(ipoid))
    .subscribe(data => {
    this.ipo = data; this.iposaveform.setValue(this.ipo)
    });
    }
    this.submitted = false;
    
    }
  
  iposaveform=new FormGroup({  
    id:new FormControl('',[Validators.required,Validators.required]),
    companyName:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
    stockExchange:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
    priceperShare:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
    totalnumberofShares:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),
    remarks:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
    opendatetime:new FormControl('',[Validators.required,Validators.required]), 
    
    

    
  });  
  
  saveIpo(saveIpo){  
    this.ipo=new Ipo();     
    this.ipo.id=this.iposaveform.get('id').value;
    this.ipo.companyName=this.iposaveform.get('companyName').value;  
    this.ipo.stockExchange=this.iposaveform.get('stockExchange').value; 
    this.ipo.priceperShare=this.iposaveform.get('priceperShare').value; 
    this.ipo.totalnumberofShares=this.iposaveform.get('totalnumberofShares').value; 
    this.ipo.remarks=this.iposaveform.get('remarks').value; 
    this.ipo.opendatetime=this.iposaveform.get('opendatetime').value;

    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.iposervice.saveIpo(this.ipo)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.ipo = new Ipo();  
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['home'])
  }  
  iposaveForm(){
    this.submitted=false;
    this.iposaveform.reset();
  }
}
  