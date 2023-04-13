import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  expressao: string;
  resultado: number;
  constructor() {
    this.expressao = '';
    this.resultado = 0 ;
  }
  limpar(){
    this.expressao = '';
  }
  addNove(){
    this.expressao += '9';
  }
  addOito(){
    this.expressao += '8';
  }
  addSete(){
    this.expressao += '7';
  }
  addSeis(){
    this.expressao += '6';
  }
  addCinco(){
    this.expressao += '5';
  }
  addQuatro(){
    this.expressao += '4';
  }
  addTres(){
    this.expressao += '3';
  }
  addDois(){
    this.expressao += '2';
  }
  addUm(){
    this.expressao += '1';
  }
  soma(){
    this.expressao += '+';
  }
  subtracao(){
    this.expressao += '-';
  }
  multiplicacao(){
    this.expressao += '*';
  }
  divisao(){
    this.expressao += '/'; 
  }
  bck(){
    
  }
  calcular(){
    this.resultado = eval(this.expressao);
  }
}
