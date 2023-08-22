import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { LoaderComponent } from './loader/loader/loader.component';
import { ShortenPipe } from './shorten.pipe';
import { MatModule } from './mat/mat.module';
import { AddIngredientPopupComponent } from './components/add-ingredient-popup/add-ingredient-popup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoaderComponent,
    AlertComponent,
    DialogComponent,
    ShortenPipe,
    DropdownDirective,
    AddIngredientPopupComponent,
    
  ],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent,
    AlertComponent,
    DialogComponent,
    ShortenPipe,
    CommonModule,
    DropdownDirective,
    MatModule,
    ReactiveFormsModule,

  ],
  entryComponents: [DialogComponent],
})
export class SharedModule {}
