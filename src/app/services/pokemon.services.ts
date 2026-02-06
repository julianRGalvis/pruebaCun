import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, mergeMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonServices {

  private urlBase = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

obtenerListadoAleatorio(): Observable<any[]> {
    const peticiones = [];
    for (let i = 0; i < 30; i++) {
      const idRandom = Math.floor(Math.random() * 500) + 1;
      peticiones.push(
        this.http.get(`${this.urlBase}/pokemon/${idRandom}`).pipe(
          catchError(() => of(null))
        )
      );
    }

    return forkJoin(peticiones).pipe(
      map((detalles: any[]) => 
        detalles
          .filter(d => d !== null)
          .map(d => this.formatearDatos(d))
      )
    );
  }

  obtenerPokemonPorNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.urlBase}/pokemon/${nombre.toLowerCase()}`).pipe(
      map(d => this.formatearDatos(d))
    );
  }

private formatearDatos(res: any) {
  return {
    id: res.id,
    nombre: res.name,
    tipos: res.types.map((t: any) => t.type.name),
    habilidades: res.abilities.map((a: any) => a.ability.name),
    caracteristicas: {
      peso: res.weight,
      altura: res.height,
      imagen: res.sprites.other['official-artwork'].front_default 
    }
  };
}

obtenerPokemonPorNombreUno(nombre: string) {
const nombreLimpio = nombre.toLowerCase().trim();
  
  return this.http.get(`${this.urlBase}/pokemon/${nombreLimpio}`).pipe(
    map((res: any) => this.formatearDatos(res))
  );
  
}
}
