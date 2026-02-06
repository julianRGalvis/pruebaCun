import { Component } from '@angular/core';
import { PokemonServices } from '../../services/pokemon.services';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon {
  pokemones:any[]=[];
  pokemonSeleccionado:any;
  modalAbierto=false;

    constructor(

    private router:Router
  ){}

  irAlListado(): void {
    this.router.navigate(['/pokemon']);
  }
  
}
