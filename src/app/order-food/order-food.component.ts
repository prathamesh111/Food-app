import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderFoodService } from './order-food.service';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.scss']
})
export class OrderFoodComponent implements OnInit{
  cartCount: number =0;

  constructor(private router: Router, private route: ActivatedRoute, private foodService: OrderFoodService){}
  ngOnInit(): void {
    this.foodService.cartCount.subscribe((cartCount) => {
      this.cartCount = cartCount;
    })
  }

  toCart(){
    this.router.navigate(['./cart'], {relativeTo: this.route});
  }

}
