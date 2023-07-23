import { Component,OnInit } from '@angular/core';
import { RecepieModal } from '../recepies/recepie.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IngredientModel } from 'src/app/shared/ingredientModel.model';

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.scss']
})
export class RecepiesDetailComponent implements OnInit {
  selectedModification: string=""
  selectedRecipeItem: RecepieModal;
  selectedIngreds: IngredientModel[];
  recId: number;
  options = ['Edit recipe','Add to shop List', 'Delete recipe' ];

  constructor(private recipeService: RecipeService, private route :ActivatedRoute, private router:Router, public dialog: MatDialog){}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params)=>{
      this.recId= +params['rId'];
      this.selectedRecipeItem= this.recipeService.getRecipebyId(this.recId);
      this.selectedIngreds = this.selectedRecipeItem.ingredients;
      console.log(this.selectedIngreds);
    });
  }

  onModifyrecipe(){
    console.log("func cal")
    // this.selectedModification= modifyRecipe.value;

    switch(this.selectedModification){
      case 'Add to shop List':
          this.recipeService.addRecipeToShopList(this.selectedRecipeItem.ingredients);
          this.selectedModification = "";
          console.log("added to sl")
          break;

      case 'Edit recipe':
        this.router.navigate(['edit'], {relativeTo: this.route});

        //**  alternate approach to navigate **//

        // this.router.navigate(['../', this.recId, 'edit'], {relativeTo: this.route});
        break;
      case 'Delete recipe':
        this.recipeService.onDeleteRecipe(this.recId);
        this.router.navigate(['/']);
        break;

      default:
        break;
    }

    
  }


}






