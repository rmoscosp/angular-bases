import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class dbzService {

  public characteres: Character[] = [
    {id: uuid(), name: 'Krilin', power:700},
    {id: uuid(), name: 'Goku', power:9500},
    {id: uuid(), name: 'Vegeta', power:8500},
  ];


  addCharacter( character: Character ): void {
    //console.log('Mainpage', character);
    const newCaracter: Character = {
      ...character
    }

    newCaracter.id = uuid(); //agregar un id al caracter

    this.characteres.push(newCaracter); //agregar el caracter al final de la lista
    //this.characteres.unshift(character); //agrega el item al principio de la lista
  }

  // onDeleteCharacter( index: number ) {

  //   console.log('caracater eliminado', this.characteres[index] );
  //   this.characteres.splice(index,1);

  // }

  deleteCharacterById(id: string){
    this.characteres =  this.characteres.filter(character => character.id !== id);
  }

}
