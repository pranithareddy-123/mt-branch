import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ImportComponent } from './import/import.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { UserlistComponent } from './userlist/userlist.component';
import{CompanydataComponent} from './companydata/companydata.component';
import{IpolistComponent} from './ipolist/ipolist.component';
import{ IpoComponent} from './ipo/ipo.component';
import{SectorComponent} from './sector/sector.component';
import{SectorlistComponent} from './sectorlist/sectorlist.component';
import{ExchangeComponent} from'./exchange/exchange.component';
import{ExchangelistComponent} from'./exchangelist/exchangelist.component';
import{StockpriceComponent} from'./stockprice/stockprice.component';
import{StockpricelistComponent} from './stockpricelist/stockpricelist.component';
import{UserlandingComponent} from './userlanding/userlanding.component';
import{ComparecompanyComponent} from'./comparecompany/comparecompany.component';
import { from } from 'rxjs';
const routes: Routes = [{
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
  path: 'userlist',
  component:UserlistComponent
  },
  {
    path: 'companydata',
    component:CompanydataComponent
    },
    {
      path: 'ipolist',
      component:IpolistComponent
      },
 {
        path: 'ipo',
        component:IpoComponent
        },
        {
          path: 'sector',
          component:SectorComponent
          },
          {
            path: 'sectorlist',
            component:SectorlistComponent
            },
            {
              path: 'exchange',
              component:ExchangeComponent
              },
              {
                path: 'exchangelist',
                component:ExchangelistComponent
                },
                {
                  path: 'stockprice',
                  component:StockpriceComponent
                  },
                  {
                    path: 'stockpricelist',
                    component:StockpricelistComponent
                    },
                    {
                      path: 'userlanding',
                      component:UserlandingComponent
                      },
                      {
                        path: 'comparecompany',
                        component:ComparecompanyComponent
                        },
                      
      
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
