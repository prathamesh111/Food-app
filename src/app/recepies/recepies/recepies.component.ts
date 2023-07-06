import { Component, OnInit } from '@angular/core';
import { RecepieModal } from './recepie.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.scss']
})
export class RecepiesComponent  {

  selectedRecipeItem: RecepieModal;

  constructor() {

  }
}
