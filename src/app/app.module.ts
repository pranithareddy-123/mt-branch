import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ImportComponent } from './import/import.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { UserlistComponent } from './userlist/userlist.component';
//import { AddUserComponent } from './adduser/adduser.component';
import { HttpClientModule } from '@angular/common/http';  
import {DataTablesModule} from 'angular-datatables';
import { CompanydataComponent } from './companydata/companydata.component';
import { IpoComponent } from './ipo/ipo.component';
import { IpolistComponent } from './ipolist/ipolist.component';
import { SectorComponent } from './sector/sector.component';
import { SectorlistComponent } from './sectorlist/sectorlist.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangelistComponent } from './exchangelist/exchangelist.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { ComparecompanyComponent } from './comparecompany/comparecompany.component';  
import { HighchartsService } from './comparecompany/highcharts-service.service';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminloginComponent,
    AdminlandingComponent,
    ImportComponent,
    ManagecompanyComponent,
    //AddUserComponent,
    UserlistComponent,
    CompanydataComponent,
    IpoComponent,
    IpolistComponent,
    SectorComponent,
    SectorlistComponent,
    ExchangeComponent,
    ExchangelistComponent,
    StockpriceComponent,
    StockpricelistComponent,
    UserlandingComponent,
    ComparecompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,  
    ReactiveFormsModule,
    DataTablesModule, 
    HighchartsChartModule, 
    
    
    RouterModule.forRoot([
      {
         path: 'login',
         component: LoginComponent
      },
      {
        path: 'adminlogin',
        component: AdminloginComponent
     },
     {
      path: 'home',
      component: HomeComponent
   },
   {
    path: 'signup',
    component: SignupComponent
 },

 {
    path: 'adminlanding',
    component: AdminlandingComponent
 },
 {
  path: 'import',
  component: ImportComponent
},
{
  path: 'managecompany',
  component: ManagecompanyComponent
},
{
  path: 'comapnydata',
  component: CompanydataComponent
},
{
  path: 'ipolist',
  component: IpolistComponent
},
{
  path: 'sectorlist',
  component: SectorlistComponent
},
{
  path: 'sector',
  component: SectorComponent
},
{
  path: 'exchange',
  component: ExchangeComponent
},
{
  path: 'exchangelist',
  component: ExchangelistComponent
},
{
  path: 'stockprice',
  component: StockpriceComponent
},
{
  path: 'stockpricelist',
  component: StockpricelistComponent
},{
  path: 'userlanding',
  component: UserlandingComponent
},

{
  path: 'comparecompany',
  component: ComparecompanyComponent
},

 
 
   ])
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
