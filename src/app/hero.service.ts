// We can refactor this hero data acquisition business to a single service that provides heroes, and share that service with all components that need heroes.
import { Injectable } from '@angular/core';

import { HEROES_ARRAY } from './shared/mock-heroes';
import { Hero } from './hero';

// TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service.
@Injectable()
export class HeroService {

  constructor() { }

  // indicate returns array of heroes
  getHeroes(): Hero[] {
    return HEROES_ARRAY;
  }
}
