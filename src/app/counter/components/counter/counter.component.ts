import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      Counter: {{ counter }}
      </h3>
      <button (click)="sumar(+1)" >+1</button>
      <button (click)="reset()" >Reset</button>
      <button (click)="sumar(-1)">-1</button>
  `,
})
export class CounterComponent implements OnInit {
  constructor() { }
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  ngOnInit() { }

  sumar(value:number){
    this.counter += value ;
  }

  reset(){
    this.counter += 10 ;
  }

}


