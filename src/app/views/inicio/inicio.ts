import { Component } from '@angular/core';
import { Preguntas } from '../preguntas/preguntas';
import { Pokemon } from '../pokemon/pokemon';


@Component({
  selector: 'app-inicio',
  imports: [Preguntas, Pokemon],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
