import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeService } from '../exchange.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Exchange } from '../exchange';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchangelist',
  templateUrl: './exchangelist.component.html',
  styleUrls: ['./exchangelist.component.css']
})
export class ExchangelistComponent implements OnInit {


 constructor(private exchangeservice: ExchangeService,private router:Router) { }
 exchangelist: Observable<any[]>;
 ngOnInit() {
 this.exchangeservice.getAllStockexchange().subscribe(data => {
 this.exchangelist = data;
 })
 
  }


  deleteStockexchange(stockexchange:Exchange){
  this.exchangeservice.deleteStockexchange(stockexchange.id).subscribe(data=>{
 this.exchangeservice.getAllStockexchange().subscribe(data=>{this.exchangelist=data;});
  });
}

updateStockexchange(exchange : Exchange ) {
  window.localStorage.removeItem("edit-id");
   window.localStorage.setItem("edit-id", exchange.id.toString());
   this.router.navigate(['exchange']);
   }
 
}


