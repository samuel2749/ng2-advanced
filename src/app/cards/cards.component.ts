import { SkyComponent } from './../sky/sky.component';

import {ViewChild, Component,  OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @ViewChild(SkyComponent)
  sky:SkyComponent;

  type:string;
  constructor(private router:Router, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.type = params['type'];
        console.log(params['type']);
        console.log("Martix: " + params['name']);
      }
    );

    this.route.queryParams.subscribe(
      params =>{console.log("QueryString: " + params['name']);}
    );

  }

  ngAfterViewInit(){
    console.log(this.sky.name);
  }

  checkSkyInputDirty(){
    console.log(this.sky.input.dirty);
  }

  counter = 10;
  incCounter(){
    this.counter++;
  }


  onClick(type){
    //this.router.navigate(["cards", type]);
    this.router.navigate(['..', type], {relativeTo:this.route});
    //console.log(type);
  }

}
