import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecepiesRoutingModule } from './recepies-routing.module';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepiesDetailComponent } from './recepies-detail/recepies-detail.component';
import { RecepiesEditComponent } from './recepies-edit/recepies-edit.component';
import { RecepiesItemComponent } from './recepies-list/recepies-item/recepies-item.component';
import { RecepiesListComponent } from './recepies-list/recepies-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecepiesComponent,
    RecepiesDetailComponent,
    RecepiesEditComponent,
    RecepiesItemComponent,
    RecepiesListComponent,
  ],
  imports: [
    CommonModule,
    RecepiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class RecepiesModule {}
