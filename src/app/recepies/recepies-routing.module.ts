import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth/auth.guard';
import { RecipeResolverService } from './recepie-resolver.service';
import { RecepiesDetailComponent } from './recepies-detail/recepies-detail.component';
import { RecepiesEditComponent } from './recepies-edit/recepies-edit.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecpieStartComponent } from './recpie-start/recpie-start.component';

const routes: Routes = [
  {
    path: '',
    component: RecepiesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecpieStartComponent },
      { path: 'new', component: RecepiesEditComponent },
      {
        path: ':rId',
        component: RecepiesDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':rId/edit',
        component: RecepiesEditComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepiesRoutingModule { }
