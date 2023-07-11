import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productsModel } from './order-food.model';
import { catchError, tap } from 'rxjs/operators';
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

    addToCart(item: productsModel){
      console.log(item);
      return this.http.post('https://zomato-6db38-default-rtdb.firebaseio.com/cart.json', item)
    }


    fetchCart(){
      return this.http.get<productsModel[]>('https://zomato-6db38-default-rtdb.firebaseio.com/cart.json')
    }

    // private handleError(){

    // }

}
