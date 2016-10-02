import { ModuleWithProviders } from '@angular/core';
import { Routers, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

const appRoutes : Routes = [
    {
        path: 'heroes',
        component: 'HeroesComponent'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);