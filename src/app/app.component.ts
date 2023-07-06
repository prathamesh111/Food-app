import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth/auth.service';
import { LoggingService } from './logging.service';
import { RecipeService } from './recepies/recipe.service';
import { ShoppinglistService } from './shopping-list/shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'recipe';
  navigateLink:any="recipe";
  checked=false;
  isLoading : boolean;

  foods = [
    'das',
    'ds',
    'dsdsdw'
  ];


  constructor(private authService: AuthService, private loggingService: LoggingService, private slService: ShoppinglistService, ){

  }

  ngOnInit(): void {
    this.authService.isLoading.subscribe((isLoading)=>{
      this.isLoading= isLoading;
    });
    
    this.authService.autoLogin();
    this.loggingService.printLog('hello from app component');
  }


  ngOnDestroy(): void {
    this.authService.isLoading.unsubscribe();
  }

 
}
