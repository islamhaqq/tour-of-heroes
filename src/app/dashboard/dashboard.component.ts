import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'dashboard-view',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
