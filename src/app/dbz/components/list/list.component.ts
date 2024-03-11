import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter() ;

  // @Input()
  // public chararacterList: Character[] = []
  @Input()
  public chararacterList: Character[] = [
    {name: 'trunks', power: 5000},
  ];

  public onDeleteCharacter(index: number):void {
    this.onDelete.emit(index);
    //console.log(index);
  }

}
