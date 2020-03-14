
import { Component, OnInit,ViewChild,

  ElementRef,
 
  AfterViewInit,
 
  OnDestroy,
 
  ChangeDetectorRef, } from '@angular/core';
 
import { ManagecompanyService } from '../managecompany.service';
import { StockpriceService } from '../stockprice.service';
 import { Router } from '@angular/router';
 import { Managecompany } from '../managecompany';
 import { Observable } from 'rxjs/internal/Observable';
 import { Stockprice } from 'src/app/stockprice';
 import { SectorService } from '../sector.service';
 import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
 import { Sector } from 'src/app/sector';
 import { of } from 'rxjs';
 import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import * as Highcharts from 'highcharts';
import { HighchartsService } from './highcharts-service.service';
 
 @Component({
  selector: 'app-comparecompany',
 templateUrl: './comparecompany.component.html',
 styleUrls: ['./comparecompany.component.css']
 })
 
 export class ComparecompanyComponent implements OnInit {
  myGroup: FormGroup;



  constructor(private hcs: HighchartsService, private formBuilder: FormBuilder, private router: Router, private managecompanyservice: ManagecompanyService, private sectorservice: SectorService, private stockpriceservice: StockpriceService) { }
 
 
 
  companyList: Managecompany[];
 
 
 
  companyListAll: Managecompany[];
 
 
 
  sectorsList: Sector[];
 
 
 
  stockpriceList: Observable<[Stockprice]>;
 
 
 
  ngOnInit() {
 
 
 
   this.stockpriceservice.getmultiplelinechart().subscribe(result => {
 
 
 
   var formatteddata = [];
 
 
 
   for (var key in result) {
 
 
 
    var singleObject = {
 
 
 
    name: '',
 
 
 
    data: []
 
 
 
    }
 
 
 
    singleObject.name = key.toUpperCase();
 
 
 
    for (var i = 0; i < result[key].length; i++) {
 
 
 
    singleObject.data.push(parseInt(result[key][i].currentPrice));
 
 
 
    }
 
 
 
    formatteddata.push(singleObject);
 
 
 
   }
 
 
 
   this.drawMultipleLineChart(formatteddata);
 
 
 
   });
 
 
 
   this.myGroup = this.formBuilder.group({
 
 
 
   "choose": new FormControl([Validators.required]),
 
 
 
   "sectorName": new FormControl([Validators.required]),
 
 
 
   "companyName": new FormControl([Validators.required]),
 
 
 
   "fromdate": new FormControl([Validators.required]),
 
 
 
   "todate": new FormControl([Validators.required])
 
 
 
   })
 
 
 
   this.managecompanyservice.getAllCompany().subscribe(data => {
 
 
 
   this.companyList = data;
 
 
 
   this.companyListAll = data;
 
 
 
   this.companyList = this.companyList.filter(comp => comp.sector == 'NSE');
 
 
 
   })
 
 
 
   this.stockpriceservice.getAllStockprice().subscribe(data => {
 
 
 
   this.stockpriceList = data;
 
 
 
   })
 
 
 
   this.sectorservice.getAllSectordata().subscribe(data => {
 
 
 
   this.sectorsList = data;
 
 
 
   })
 
 
 
  }
 
 
 
  sectorChange() {
 
 
 
   alert(1234);
 
 
 
   var sectorValue = this.myGroup.controls['sectorName'].value;
 
 
 
   this.companyList = this.companyListAll.filter(comp => comp.sector == sectorValue);
 
 
 
  }
 
 
 
  drawMultipleLineChart(formatteddata) {
 
 
 
  Highcharts.chart('container', {
 
 
 
   title: {
 
 
 
    text: 'Stock Market Growth by Sector, 2010-2019'
 
 
 
   },
 
 
 
 
 
 
   yAxis: {
 
 
 
    title: {
 
 
 
    text: 'Current Price'
 
 
 
    }
 
 
 
   },
 
 
 
   legend: {
 
 
 
    layout: 'vertical',
 
 
 
    align: 'right',
 
 
 
    verticalAlign: 'middle'
 
 
 
   },
 
 
 
   plotOptions: {
 
 
 
    series: {
 
 
 
    label: {
 
 
 
     connectorAllowed: false
 
 
 
    },
 
 
 
    pointStart: 2000
 
 
 
    }
 
 
 
   },
 
 
 
   series: formatteddata,
 
 
 
   responsive: {
 
 
 
    rules: [{
 
 
 
    condition: {
 
 
 
     maxWidth: 500
 
 
 
    },
 
 
 
    chartOptions: {
 
 
 
     legend: {
 
 
 
     layout: 'horizontal',
 
 
 
     align: 'center',
 
 
 
     verticalAlign: 'bottom'
 
 
 
     }
 
 
 
    }
 
 
 
    }]
 
 
 
   }
 
 
 
   });
 
 
 
  }
 
  
 }