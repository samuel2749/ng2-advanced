
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  type:string;
  constructor(private router:Router, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.type = params['type'];
        console.log(params['type']);
      }
    );
  }

  onClick(type){
    this.router.navigate(["cards", type]);
    console.log(type);
  }

}
