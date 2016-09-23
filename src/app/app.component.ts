// root component

import { Component } from '@angular/core';

// Hero class
// Classes are created before the final component class is exported
export class Hero{
  id : number;
  name : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
