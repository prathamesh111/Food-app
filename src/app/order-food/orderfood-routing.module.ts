import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';
import { DiningComponent } from './dining/dining.component';
import { OrderFoodComponent } from './order-food.component';
import { OrderFoodResolver } from './order-food.resolver';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: OrderFoodComponent,
    children: [
      {
        path: 'delivery',
        resolve: { prodMain: OrderFoodResolver },
        component: DeliveryComponent,
        children: [
          {path: '', component: ProductListingComponent},
          {path : ':pId/detail', component: ProductDetailsComponent},
          
        ]
      },
      { path: 'dinein', component: DiningComponent },
    ],
  },
  {path : 'cart', component: CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class orderFoodRouting {}
