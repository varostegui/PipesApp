import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string = 'victor';
  nombreUpper:string = 'VICTOR';
  nombreCompleto:string = 'victor Arostegui';

  fecha: Date = new Date();
}
