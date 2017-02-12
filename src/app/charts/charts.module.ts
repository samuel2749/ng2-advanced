import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { FlotComponent } from './flot/flot.component';
import { RadialComponent } from './radial/radial.component';
import { RickshawComponent } from './rickshaw/rickshaw.component';

@NgModule({
  declarations: [
    FlotComponent,
    RadialComponent,
    RickshawComponent
    ],

  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
