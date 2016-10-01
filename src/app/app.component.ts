// root component

import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroesArray: Hero[];
  selectedHero : Hero;
  
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  };

  constructor(private heroService: HeroService) {
    this.heroesArray = heroService.getHeroes();
  }
}
