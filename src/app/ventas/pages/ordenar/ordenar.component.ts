import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'SuperMan',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'BatMan',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ];

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarPor(valor : string) {
    this.ordenarPor = valor;
  }
}