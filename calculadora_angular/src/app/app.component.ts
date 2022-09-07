import { Component } from '@angular/core';
import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora_angular';
  input: String = '';
  respuesta: String = '';

  calcular() {
    this.respuesta = math.evaluate(this.input.toString());
    this.input='';
  }


  ponerNumeros(valor: any) {
    this.input += valor;
  }

  del() {
    this.input = '';
  }
}
