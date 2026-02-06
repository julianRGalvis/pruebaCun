import { Component, OnInit } from '@angular/core';
import { PreguntasServices } from '../../services/preguntas.services';
import { Pregunta } from './preguntas.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preguntas.html',
  styleUrl: './preguntas.css',
})
export class Preguntas implements OnInit {
preguntas: Pregunta[] = [];

  constructor(private preguntasService: PreguntasServices) {}

ngOnInit() {
 this.cargarData()
}

  cargarData(): void {
    this.preguntas = this.preguntasService.preguntas();
  }
}
