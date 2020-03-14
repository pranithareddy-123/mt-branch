import { Component, OnInit } from '@angular/core';
import { Stockprice } from '../stockprice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StockpriceService } from '../stockprice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {
constructor(private stockpriceservice:StockpriceService,private router:Router){}
  stockprice : Stockprice=new Stockprice();  
    submitted = false;  
    
    ngOnInit() {  
      var stockpricecompanyCode = window.localStorage.getItem("edit-companyCode");
if (stockpricecompanyCode != null && stockpricecompanyCode != "") {
this.stockpriceservice.find1((stockpricecompanyCode))
.subscribe(data => {
this.stockprice= data; this.stockpricesaveform.setValue(this.stockprice)
});
}
this.submitted = false;

}

    stockpricesaveform=new FormGroup({  
      
      companyCode:new FormControl('' , [Validators.required , Validators.minLength(2) ] ), 
      stockExchange:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
      currentPrice:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),
    date:new FormControl(),
    time:new FormControl(),
    uploadfile:new FormControl(),
    });  
    
    SaveStockprice(saveStockprice){  
      this.stockprice=new Stockprice();     
      this.stockprice.companyCode=this.stockpricesaveform.get('companyCode').value;
      this.stockprice.stockExchange=this.stockpricesaveform.get('stockExchange').value;  
      this.stockprice.currentPrice=this.stockpricesaveform.get('currentPrice').value; 
      this.stockprice.date=this.stockpricesaveform.get('date').value;
      this.stockprice.time=this.stockpricesaveform.get('time').value;
      this.stockprice.uploadfile=this.stockpricesaveform.get('uploadfile').value;
      this.submitted = true;  
      this.save();  
    }  
    
      
    
    save() {  
      this.stockpriceservice.SaveStockprice(this.stockprice)  
        .subscribe(data => console.log(data), error => console.log(error));  
      this.stockprice = new Stockprice(); 
      window.localStorage.removeItem("edit-companyCode");
      this.router.navigate(['home']) 
    }  
    

    
  stockpricesaveForm(){
    this.submitted=false;
    this.stockpricesaveform.reset();
  }
  }
    
  
  
  
  
