// root component

import { Component } from '@angular/core';
import { Hero } from './hero.ts';

// seperate hero data from component class implementation. Fetch hero data using a data service later
// mock data
const HEROES_ARRAY: Hero[] = [
  { id: 11, name: 'Mr. Nice'},
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroesArray = HEROES_ARRAY;
  selectedHero : Hero;
  
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  };
}
