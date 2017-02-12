
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
