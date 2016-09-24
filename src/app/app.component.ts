// root component

import { Component } from '@angular/core';

// Hero class
// Classes are created before the final component class is exported
export class Hero{
  id : number;
  name : string;
}

const ListOfHeroes: Hero[] = [
  { id: 1, name: 'Mr. Nice'},
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
  hero : Hero = {
    id : 1,
    name : 'Windstorm'
  };
  // no need to specify type of heros since TypeScript can infer from the ListOfHeroes array
  heros = ListOfHeroes;
}
