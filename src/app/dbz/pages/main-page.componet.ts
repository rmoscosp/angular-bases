import { Component, OnInit } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {
  public characteres: Character[] = [
    {name: 'Krilin', power:700},
    {name: 'Goku', power:9500},
    {name: 'Vegeta', power:8500},
  ];

  constructor() { }

  ngOnInit() { }

  onNewCharacter( character: Character ): void {
    //console.log('Mainpage', character);
    this.characteres.push(character); //agregar el caracter al final de la lista
    //this.characteres.unshift(character); //agrega el item al principio de la lista
  }


  onDeleteCharacter( index: number ) {

    console.log('caracater eliminado', this.characteres[index] );
    this.characteres.splice(index,1);

  }


}
