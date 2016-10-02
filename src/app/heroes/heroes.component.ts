// root component

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'heroes-view',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit{
  heroesArray: Hero[];
  selectedHero : Hero;
  
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  };

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    // when the promise resolves, then fetch hero array data
    this.heroService.getHeroes().then(promisedArray => this.heroesArray = promisedArray);
  }

  // use ngOnInit lifecycle hook to call getHeroes() on creation of AppComponent
  ngOnInit(): void {
    this.getHeroes();
  }
}
