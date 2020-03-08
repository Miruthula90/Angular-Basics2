import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashComponent} from './dash/dash.component';
import {ProductsComponent} from './products/products.component';


const routes: Routes = [
  {
    path:'',component:DashComponent
  },
  {
    path:'Products',component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
