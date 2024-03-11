import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter() ;

  // @Input()
  // public chararacterList: Character[] = []
  @Input()
  public chararacterList: Character[] = [
    {id:uuid() ,  name: 'trunks', power: 5000},
  ];

  public onDeleteCharacter(id: string):void {
    this.onDelete.emit(id);
    //console.log(index);
  }

}

