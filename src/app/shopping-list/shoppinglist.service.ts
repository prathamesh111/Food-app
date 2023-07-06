import { Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredientModel.model';
import { Subject, catchError } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  editIngredIndex = new Subject<number>();
  ingredChanged = new Subject<IngredientModel[]>();
  isEditMode = new Subject<boolean>();
  private http: HttpClient;
  private ingredients: IngredientModel[] = [];

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  postIngredient(ingredient: IngredientModel) {
    return this.http.post('http://localhost:3000/ingreds', ingredient);
  }

  fetchIngredients() {
    return this.http.get<IngredientModel[]>('http://localhost:3000/ingreds');
  }
  updateIngredient(newIngredient: IngredientModel, index: number) {
    return this.http.put('http://localhost:3000/ingreds/' + index, newIngredient);
  }

  deleteIngredient(index: number) {
    this.http
      .delete('http://localhost:3000/ingreds/' + index)
      .subscribe((data) => {
        console.log(data);
      });
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredients(ingred: IngredientModel[]) {
    this.ingredients.push(...ingred);
    this.ingredChanged.next(this.ingredients.slice());
  }
}
