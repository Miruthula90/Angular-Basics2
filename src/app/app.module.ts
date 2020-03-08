import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashComponent } from './dash/dash.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from "@angular/forms";
import { ProductsComponent } from './products/products.component';
import { ShopperComponent } from './shopper/shopper.component';
import { GenjsonComponent } from './genjson/genjson.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashComponent,
    CardComponent,
    ProductsComponent,
    ShopperComponent,
    GenjsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
