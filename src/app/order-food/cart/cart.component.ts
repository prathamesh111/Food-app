import { Component, OnInit } from '@angular/core';
import { productsModel } from '../order-food.model';
import { OrderFoodService } from '../order-food.service';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart: productsModel[];
  cartCount: number =0;
  addedItem:any;
  cartPriceSummary : number=0;
  discount : number=120;
  deliveryCharges: number =20;
  totalCharges: number =0

  constructor(private foodService: OrderFoodService  ){
  }

  ngOnInit(): void {
    this.foodService.fetchCart().subscribe(cart => {
      this.cart = cart;
      this.cartCount = this.cart.length;
      this.foodService.cartCount.next(this.cartCount);
      this.getCartPrice();
      this.getTotalCharges();
    })
  }

  getCartPrice(){
       this.cart.forEach((item) => {
        this.cartPriceSummary += item.price;
      })
      console.log(this.cartPriceSummary);
  }

  getTotalCharges(){
    this.totalCharges = this.cartPriceSummary - this.discount + this.deliveryCharges
  }
}
