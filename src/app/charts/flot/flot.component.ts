import { OnDestroy, Component,  OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit, OnDestroy {
  userName:string;
  parentParams:Subscription;
  constructor(private router:Router, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.parentParams = this.route.parent.params.subscribe(params =>{
      this.userName = params["username"];
      console.log(this.userName);
    });
  }

  ngOnDestroy(){
    this.parentParams.unsubscribe();
  }

}
