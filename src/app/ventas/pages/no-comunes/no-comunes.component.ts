import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Victor';
  genero: string = 'Masculino';

  invitacionMapp = { 
    'Masculino' : 'invitarlo',
    'Femenino' : 'invitarla'
  }

  //i18nPlural
  cliente: string[] = ['Maria','Juan','Pedro','Gabriela'];
  clientesMap={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre='Daniela',
    this.genero='Femenino'
  }

  borrarCliente() {
    this.cliente.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

  //keyValue Pipe
  persona = {
    nombre: 'Victor',
    edad: 23,
    direccion: 'Detras del colegio España, Managua'
  }

  //Json Pipe
  heroes = [
    { 
      name: 'SuperMan',
      vuelva: true
    },
    { 
      name: 'BatMan',
      vuelva: false
    },
    { 
      name: 'Flash',
      vuelva: false
    }
  ]

  //ASyn Pipe
  miObservable = interval(1000);

  valorPromesa=new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa')
    }, 3500 );
  })

}
