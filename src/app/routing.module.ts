import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { HaendlerComponent } from './sites/haendler/haendler.component';
import { PersonComponent } from './sites/person/person.component';
import { AutosComponent } from './sites/autos/autos.component';
import { AutodetailsComponent } from './sites/autos/autodetails/autodetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'haendler', component: HaendlerComponent },
  { path: 'person', component: PersonComponent },
  { path: 'autos/:ID', component: AutodetailsComponent },
  { path: 'autos', component: AutosComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
