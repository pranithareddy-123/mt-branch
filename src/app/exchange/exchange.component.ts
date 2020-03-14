import { Component, OnInit } from '@angular/core';
import { Exchange } from '../exchange';
import { ExchangeService } from '../exchange.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  constructor(private exchangeservice:ExchangeService,private router:Router) { }  
    
    exchange : Exchange=new Exchange();  
    submitted = false;  
    
    ngOnInit() {  
      var exchangeid = window.localStorage.getItem("edit-id");
      if (exchangeid != null && exchangeid != "") {
      this.exchangeservice.find6(parseInt(exchangeid))
      .subscribe(data => {
      this.exchange = data; this.exchangesaveform.setValue(this.exchange)
      });
      }
      this.submitted = false;
      
      }
      
    
    exchangesaveform=new FormGroup({  
      id:new FormControl('',[Validators.required,Validators.required]),
      stockExchange:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
      brief:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
      contactAddress:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
      remarks:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
     
      
  
      
    });  
    
    saveStockexchange(savestockexchange){  
      this.exchange=new Exchange();     
      this.exchange.id=this.exchangesaveform.get('id').value;
      this.exchange.stockExchange=this.exchangesaveform.get('stockExchange').value;  
      this.exchange.brief=this.exchangesaveform.get('brief').value; 
      this.exchange.contactAddress=this.exchangesaveform.get('contactAddress').value;  
      this.exchange.remarks=this.exchangesaveform.get('remarks').value; 
      
      
      this.submitted = true;  
      this.save();  
    }  
    
      
    
    save() {  
      this.exchangeservice.saveStockexchange(this.exchange)  
        .subscribe(data => console.log(data), error => console.log(error));  
      this.exchange = new Exchange();  
      window.localStorage.removeItem("edit-id");
    this.router.navigate(['home'])
    }  
    iposaveForm(){
      this.submitted=false;
      this.exchangesaveform.reset();
    }
  }
    
  
  