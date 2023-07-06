import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { RecepieModal } from './recepies/recepie.modal';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<RecepieModal[]> {
  constructor(
    private dataservice: DataStorageService,
    private recipeService: RecipeService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): RecepieModal[] | Observable<RecepieModal[]> | Promise<RecepieModal[]> {
    const recipies = this.recipeService.getRecepies();

    if (recipies.length === 0) {
      return this.dataservice.fetchData();
    } else {
      return recipies;
    }
  }
}
