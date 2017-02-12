import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {
  userName
  constructor(private router:Router, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.userName = this.route.parent.snapshot.params["username"];
    console.log(this.userName);
  }

}
