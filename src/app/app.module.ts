import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';

import { HttpClientModule } from '@angular/common/http';

import { RecpieStartComponent } from './recepies/recpie-start/recpie-start.component';
import { FormsCompComponent } from './forms-comp/forms-comp.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { MatModule } from './shared/mat/mat.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderFood } from './order-food/order-food.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecpieStartComponent,
    FormsCompComponent,
    ReactiveFormComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    MatModule,
    OrderFood
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
