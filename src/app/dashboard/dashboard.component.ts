import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(
    private heroService: HeroService, private router: Router) {
  }

  fetchHeroesArray(): void {
    this.heroService.getHeroes().then(promisedArray => this.heroesArray = promisedArray.slice(1,5))
  }

  goToDetail(listedHero: Hero): void {
    let link = ['/detail', listedHero.hero_id]
    this.router.navigate(link);
  }

  ngOnInit() {
    // fetch promised HEROES_ARRAY upon creation of DashboardComponent
    this.fetchHeroesArray();
  }

}
