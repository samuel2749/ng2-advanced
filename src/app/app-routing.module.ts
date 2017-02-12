import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:"layout", pathMatch:"prefix" },
  { path: 'layout', component: LayoutComponent },
  { path: 'page2', component: Page2Component },
  { path: '**', redirectTo:"layout", pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
