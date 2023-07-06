import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productsModel } from './order-food.model';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderFoodService {

  productsMain:productsModel[] ;


  constructor(private http : HttpClient) {}

    fetchProducts(){
     return this.http.get<productsModel[]>('https://api.escuelajs.co/api/v1/products').pipe(tap(
      res => {
        this.productsMain = res;
      }
     ))
    }

    getProducts(){
      return this.productsMain;
    }


}
