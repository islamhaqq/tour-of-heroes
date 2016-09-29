import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero.ts';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero : Hero;
}
