import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/order', pathMatch: 'full' },
  {path: 'recepies', loadChildren : ()=> import('./recepies/recepies.module').then(m=> m.RecepiesModule)},
  {path: 'shopping-list', loadChildren : ()=> import('./shopping-list/shopping.module').then(m => m.ShoppingModule)},
  {path: 'auth',  loadChildren: ()=> import('./auth/auth/auth.module').then(m => m.AuthModule)},
  {path: 'order', loadChildren: ()=> import('./order-food/order-food.module').then(m => m.OrderFood)},
  {path: '*', pathMatch: 'full', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
