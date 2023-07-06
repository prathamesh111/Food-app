import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderFoodService } from '../order-food.service';
import { productsModel } from '../order-food.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {
  products: productsModel[];
  constructor(private foodService: OrderFoodService, private router: ActivatedRoute) {}


  ngOnInit(): void {
    this.foodService.fetchProducts();
    this.products = this.router.snapshot.data['prodMain'];
  }
}
