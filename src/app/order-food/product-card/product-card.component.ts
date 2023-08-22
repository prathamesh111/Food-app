import { Component, Input, OnInit } from '@angular/core';
import { productsModel } from '../order-food.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  pId: number;
  
  @Input() productItem : productsModel;

  ngOnInit(): void {
    this.pId =this.productItem.id;
  }



}
