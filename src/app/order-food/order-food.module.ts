import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { orderFoodRouting } from './orderfood-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { DiningComponent } from './dining/dining.component';
import { OrderFoodComponent } from './order-food.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    OrderFoodComponent,
    DeliveryComponent,
    DiningComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductListingComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    orderFoodRouting
  ]
})
export class OrderFood{}
