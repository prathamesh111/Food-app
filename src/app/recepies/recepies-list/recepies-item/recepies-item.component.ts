import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecepieModal } from '../../recepies/recepie.modal';


@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.scss']
})
export class RecepiesItemComponent {

  @Input('recepie') recepie: RecepieModal;
  @Input() rID: number;


  constructor(){
    
  }





}
