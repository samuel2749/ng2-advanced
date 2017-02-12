import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { RickshawComponent } from './rickshaw/rickshaw.component';
import { RadialComponent } from './radial/radial.component';
import { FlotComponent } from './flot/flot.component';


import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards/:type', component: CardsComponent },
  { path: 'charts',
    children:[
      { path: '', redirectTo:"flot", pathMatch:"full" },
      { path: 'flot', component: FlotComponent },
      { path: 'radial', component: RadialComponent },
      { path: 'rickshaw', component: RickshawComponent },

    ] },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
