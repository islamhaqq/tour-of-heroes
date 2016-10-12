import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'dashboard-view',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // create component property to be used in template
  heroesArray: Hero[];

  // instantiate HeroesService so it can be used in DashboardComponent
  constructor(private heroService: HeroService) {
  }

  fetchHeroesArray(): void {
    this.heroService.getHeroes().then(promisedArray => this.heroesArray = promisedArray.slice(1,5))
  }

  ngOnInit() {
    // fetch promised HEROES_ARRAY upon creation of DashboardComponent
    this.fetchHeroesArray();
  }

}
