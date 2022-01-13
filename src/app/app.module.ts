import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HaendlerComponent } from './sites/haendler/haendler.component';
import { PersonComponent } from './sites/person/person.component';
import { AutosComponent } from './sites/autos/autos.component';
import { AutodetailsComponent } from './sites/autos/autodetails/autodetails.component';
import { HomeComponent } from './sites/home/home.component';
import { CARS, GlobalConstants } from './global-constants';

declare var require: any;

var myCars: CARS[] = require('./data/autos.json');

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgxNavbarModule,
    RoutingModule,
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    HaendlerComponent,
    PersonComponent,
    HomeComponent,
    AutosComponent,
    AutodetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    GlobalConstants.CarList = myCars;
    // console.log(GlobalConstants.CarList);
  }
}
