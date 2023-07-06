import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { productsModel } from './order-food.model';
import { OrderFoodService } from './order-food.service';

@Injectable({
  providedIn: 'root'
})
export class OrderFoodResolver implements Resolve<productsModel> {
  constructor(private route : Router, private foodService: OrderFoodService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.foodService.fetchProducts();
  }
}
