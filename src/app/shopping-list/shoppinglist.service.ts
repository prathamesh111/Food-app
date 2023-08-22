import { Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredientModel.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  editIngredIndex = new Subject<number>();
  ingredChanged = new Subject<IngredientModel[]>();
  isEditMode = new Subject<boolean>();
  private ingredients: IngredientModel[] = [];

constructor(  private http: HttpClient){}

  postIngredient(ingredient: IngredientModel) {
    return this.http.post('https://zomato-6db38-default-rtdb.firebaseio.com/ingredients.json', ingredient);
  }

  fetchIngredients() {
    return this.http.get<IngredientModel[]>('https://zomato-6db38-default-rtdb.firebaseio.com/ingredients.json');
  }
  
  updateIngredient(newIngredient: IngredientModel, index: number) {
    return this.http.put('http://localhost:3000/ingreds/' + index, newIngredient);
  }

  deleteIngredient(index: number) {
    this.http
      .delete('https://zomato-6db38-default-rtdb.firebaseio.com/ingredients.json' +index)
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
    return this.http.post('http://localhost:3000/ingreds/', ingred).subscribe((res) => {
      console.log(res);
    })
    // this.ingredChanged.next(this.ingredients.slice());
  }
}
