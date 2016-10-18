// We can refactor this hero data acquisition business to a single service that provides heroes, and share that service with all components that need heroes.
import { Injectable } from '@angular/core';

import { HEROES_ARRAY } from './shared/mock-heroes';
import { Hero } from './hero';

// TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service.
@Injectable()
export class HeroService {

  constructor() { }

  // indicate returns array of heroes
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES_ARRAY);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getHeroes());
  }

  getHero(hero_id: number): Promise<Hero> {
    return this.getHeroes().then(promisedArray => promisedArray.find(promisedHero => promisedHero.hero_id === hero_id));
  }
}