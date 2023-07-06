import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecepieModal } from '../recepies/recepie.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.scss'],
})
export class RecepiesListComponent implements OnInit {
  recepies: RecepieModal[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeService.recipesChanged.subscribe((recepie: RecepieModal[]) => {
      this.recepies = recepie;
      console.log(recepie);
    });
    this.recepies = this.recipeService.getRecepies();

  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
