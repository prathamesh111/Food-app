import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { RecepieModal } from './recepies/recepie.modal';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';
import { IngredientModel } from '../shared/ingredientModel.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<RecepieModal[]>();

  private recepies: RecepieModal[] = [];

  constructor(private shopListService: ShoppinglistService) {}

  getRecepies() {
    return this.recepies.slice();
  }

  setRecepies(fetchedRecepies:RecepieModal[]){
    this.recepies = fetchedRecepies;
    this.recipesChanged.next(this.recepies.slice());
  }

  addRecipeToShopList(ingredients: IngredientModel[]) {
    this.shopListService.addIngredients(ingredients);
    this.recipesChanged.next(this.recepies.slice());
  }

  getRecipebyId(index: number) {
    return this.recepies[index];
  }

  getRecepie(index: number) {
    return this.recepies[index];
  }

  addRecipe(recipe: RecepieModal) {
    this.recepies.push(recipe);
    this.recipesChanged.next(this.recepies.slice());
  }

  updateRecipe(index: number, newRecipe: RecepieModal) {
    this.recepies[index] = newRecipe;
    this.recipesChanged.next(this.recepies.slice());
  }

  onDeleteRecipe(rIndex: number) {
    this.recepies.splice(rIndex, 1);
    this.recipesChanged.next(this.recepies.slice());
  }

  autoFetchRecepies(){
    if(localStorage.getItem('recepies')){
      this.recepies = JSON.parse(localStorage.getItem('recepies') || '{}')
    }
    this.recipesChanged.next(this.recepies.slice());
  }
}
