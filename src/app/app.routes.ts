import { Routes } from '@angular/router';

import { Preguntas } from './views/preguntas/preguntas';
import { Pokemon } from './views/pokemon/pokemon';
import { Inicio } from './views/inicio/inicio';
import { PokemonList } from './views/pokemon/pokemon-list/pokemon-list';
import { PokemonDetalle } from './views/pokemon/pokemon-list/pokemon-detalle/pokemon-detalle';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'preguntas', component: Preguntas },
  { 
    path: 'pokemon', 
    component: PokemonList, 
    children: [
      { path: ':nombre', component: PokemonDetalle }
    ]
  },
  { path: '**', redirectTo: '/inicio' }
];