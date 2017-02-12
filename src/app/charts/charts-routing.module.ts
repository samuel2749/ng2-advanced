import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RickshawComponent } from './rickshaw/rickshaw.component';
import { RadialComponent } from './radial/radial.component';
import { FlotComponent } from './flot/flot.component';

const routes: Routes = [
  { path: 'charts/:username',
    children:[
      { path: '', redirectTo:"flot", pathMatch:"full" },
      { path: 'flot', component: FlotComponent },
      { path: 'radial', component: RadialComponent },
      { path: 'rickshaw', component: RickshawComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }
