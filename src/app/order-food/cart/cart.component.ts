import { Component, OnInit } from '@angular/core';
import { productsModel } from '../order-food.model';
import { OrderFoodService } from '../order-food.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart: productsModel[] =[];
  addedItem:any;

  constructor(private foodService: OrderFoodService  ){
  }

  ngOnInit(): void {
    this.foodService.fetchCart().subscribe(cart => {
      this.cart = cart;
      console.log(this.cart);
    })
    
  }




}
