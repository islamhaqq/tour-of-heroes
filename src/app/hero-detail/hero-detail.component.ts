import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // reference Hero class from AppComponent
  @Input() listedHero : Hero;
  
  constructor() {}
  ngOnInit() {}
}
