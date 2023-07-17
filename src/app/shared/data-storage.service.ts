import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recepies/recipe.service';
import { RecepieModal } from '../recepies/recepies/recepie.modal';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})


export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recService: RecipeService,
  ) {}


  storeRecepies() {
    const recepies = this.recService.getRecepies();
     this.http
      .put(
        'https://zomato-6db38-default-rtdb.firebaseio.com/recepies.json',
        recepies
      ).subscribe()
  }

  fetchData() { 
    return this.http
      .get<RecepieModal[]>(
        'https://zomato-6db38-default-rtdb.firebaseio.com/recepies.json'
      )
      .pipe(
        map((recepies) => {
          return recepies.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((fetchedRecepies) => {
          this.recService.setRecepies(fetchedRecepies);
          localStorage.setItem('recepies', JSON.stringify(fetchedRecepies)); 
        })
      );
  }



}
