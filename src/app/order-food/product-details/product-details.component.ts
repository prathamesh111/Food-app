import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderFoodService } from '../order-food.service';
import { productsModel } from '../order-food.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  pId: number;
  allProducts: productsModel[];
  detailProduct :productsModel[];
  detailItem : productsModel;

  constructor(private route: ActivatedRoute, private foodService: OrderFoodService, private router: Router){

  }
  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.pId = res['pId'];
      this.allProducts = this.foodService.getProducts();
      this.detailProduct = this.allProducts.filter((allproducts) => {
        return allproducts.id == this.pId;
      })
      
    });
   
    this.detailItem = this.detailProduct[0];
    console.log(this.detailItem)
    
    }


    addToCart(){
      this.foodService.addToCart(this.detailItem).subscribe(res => {
        console.log(res);
      })
      this.router.navigate(['../../../cart'], {relativeTo: this.route});
    }

}
