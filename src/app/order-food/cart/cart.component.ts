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

  constructor(private route: ActivatedRoute  ){
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((res) => {
      console.log(res);
    })
    this.route.queryParams.subscribe((res) => {
      console.log(res);
    })
    
  }




}
