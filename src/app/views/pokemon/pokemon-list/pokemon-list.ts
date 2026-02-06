import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PokemonServices } from '../../../services/pokemon.services';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList implements OnInit {
  listaPokemones: any[] = [];
  cargando: boolean = true;
  isBrowser: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private pokemonService: PokemonServices,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.obtenerPokemones();
    }
  }

  obtenerPokemones(): void {
    this.cargando = true;
    this.pokemonService.obtenerListadoAleatorio().subscribe({
      next: (datos) => {
        this.listaPokemones = datos;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

verDetalle(nombre: string): void {
  if (!nombre) return;
  const nombreLimpio = nombre.toLowerCase().trim();
  this.router.navigate(['/pokemon', nombreLimpio]);
}

}