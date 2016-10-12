import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // listedHero is an input, the target of a property binding so it will have [] around it
  @Input()
  // reference Hero class from AppComponent
  listedHero : Hero;
  
  constructor() {}
  ngOnInit() {}
}
