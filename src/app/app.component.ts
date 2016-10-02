// root component

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
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
