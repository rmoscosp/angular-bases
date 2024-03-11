import { Component, OnInit } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {
  constructor(
    private dbzService:dbzService
  ) {

  }

  get characteres(): Character[] {
    return [...this.dbzService.characteres];
  }

  onDeleteCharacter( id: string ) {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character ) {
    this.dbzService.addCharacter(character);
  }


  ngOnInit() { }

}
