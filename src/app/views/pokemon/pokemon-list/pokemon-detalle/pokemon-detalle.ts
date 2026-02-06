import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PokemonServices } from '../../../../services/pokemon.services';

@Component({
  selector: 'app-pokemon-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-detalle.html',
  styleUrl: './pokemon-detalle.css',
})
export class PokemonDetalle {
pokemon: any = null;
  cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonServices,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    const nombre = params['nombre'];
    if (nombre && nombre !== 'pokemon-list') {
      this.cargarDatos(nombre);
    }
  });
}

cargarDatos(nombre: string) {
  this.cargando = true;
  this.pokemonService.obtenerPokemonPorNombre(nombre).subscribe({
    next: (data) => {
      this.pokemon = data;
      this.cargando = false;
      this.cdr.detectChanges();
    },
    error: () => {
      this.cargando = false;
      this.cdr.detectChanges();
    }
  });
}
  cerrar(): void {
    this.router.navigate(['/pokemon']);
  }
}
