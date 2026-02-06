import { Injectable, signal } from '@angular/core';
import { Pregunta } from '../views/preguntas/preguntas.interface';

@Injectable({
  providedIn: 'root',
})
export class PreguntasServices {
  private _preguntas = signal<Pregunta[]>([
    {
      pregunta:
        '¿Cuáles son las etiquetas en HTML5 que usaría para la captura de datos del siguiente formulario?',
      respuesta: `
    <ul>
      <li>form</li>
      <li>input</li>
      <li>select</li>
      <li>options</li>
      <li>button</li>
      <li>div</li>
    </ul>
  `,
    },
    {
      pregunta:
        '¿Qué es un media query en CSS3 y para qué se utiliza?, ¿Cuáles serían las media query que usaría para un sitio web y/o aplicación consumida principalmente en celulares de gama media y que abarque la mayoría de resoluciones de pantallas para escritorio sin hacer uso de demasiados queries? Justifique su respuesta.',

      respuesta: `
      <p>
      Los media queries permiten aplicar estilos según el tamaño de pantalla, facilitando la creación de diseños responsive mediante breakpoints que adaptan la interfaz a distintos dispositivos.      </p>

          <pre><code>
        @media (min-width: 576px) { }

        @media (min-width: 768px) { }

        @media (min-width: 992px) { }

        @media (min-width: 1200px) { }
          </code></pre>

      `,
    },
    {
      pregunta: 'Explique la diferencia entre margin y padding.',
      respuesta: 'El margin controla el espacio externo entre elementos, mientras que el padding controla el espacio interno entre el contenido y el borde del elemento.',
    },
    {
      pregunta: '¿Qué es una promise en JavaScript? Por favor dé un ejemplo en código.',
      respuesta: `
      <p>
      Una Promise es una forma de manejar operaciones que se ejecutan en segundo plano, permitiendo saber cuándo terminan correctamente o cuándo ocurre un error. </p>

          <pre><code>
        const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("ok");
        }, 2000);
        });

        promesa
          .then((resultado) => {
            console.log(resultado);
          })
          .catch((error) => {
            console.log(error);
          });
          </code></pre>

      `,
    },
    {
      pregunta:
        '¿Qué es y cómo se define un componente en Angular (versión 16 en adelante)? Por favor adjuntar a la prueba el código del componente y hacerlo ejecutable.',
      respuesta: 'En Angular 16 en adelante los componentes pueden trabajarse como Standalone Components, lo que significa que ya no es obligatorio usar módulos (NgModule) ni un archivo separado como app.module.ts para declarar e importar componentes, Cada componente puede manejar sus propias importaciones directamente dentro del decorador @Component.',
    },
    {
      pregunta: '¿Cómo se maneja la comunicación entre componentes padre e hijo en Angular?',
      respuesta: 'El padre envía información al hijo con @Input(), y el El hijo emite respuestas al padre mediante @Output().',
    },
    {
      pregunta: '¿Cómo se envuelve el contenido en Bootstrap?',
      respuesta: 'En Bootstrap el contenido se envuelve dentro de (container), que permiten centrar la interfaz, controlar los márgenes y hacer que el diseño sea responsive usando row y col para organizar el contenido en columnas',
    },
    {
      pregunta: '¿Cuál es la diferencia entre instalar y activar un tema en WordPress?',
      respuesta: `
        <p>
          Instalar un tema es cuando se sube o se agrega al servidor de WordPress, dejándolo disponible sin modificar aún el diseño del sitio.
        </p>

        <p>
          Activar un tema es cuando se pone en funcionamiento ese diseño instalado, aplicándolo como la apariencia actual del sitio web.
        </p>`
      },
    {
      pregunta:
        'Mencione tres tipos de sitio web en los que WordPress no es la solución ideal y una situación en la que WordPress es la elección correcta para un sitio web.',
      respuesta: `
        <p>
          No es buena opción.
        </p>
      
    <ul>
      <li>Sistemas robustos de gestión de inventarios</li>
      <li>Procesos ETL o manejo intensivo de datos</li>
      <li>Sistemas bancarios o financieros</li>
    </ul>

        <p>
          es buena opción.
        </p>
      
    <ul>
      <li>páginas informativas o blogs</li>
    </ul>
  `,
    },
    {
      pregunta: 'Explíquenos cómo y qué criterios usarías para actualizar un sitio en WordPress.',
      respuesta: `
        <ul>
          <li>Hacer copia de seguridad antes de cualquier cambio por si algo falla.</li>
          <li>Probar primero en una versión de prueba para asegurar que todo siga funcionando bien.</li>
          <li>Revisar compatibilidad entre plugins, tema y WordPress.</li>
          <li>Actualizar por seguridad cuando haya mejoras o correcciones importantes.</li>
          <li>Verificar el sitio al final, que cargue bien, que el diseño no se dañe y que las funciones principales trabajen normal.</li>
        </ul>`,
    },
  ]);

  preguntas = this._preguntas.asReadonly();
}
