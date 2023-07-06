import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecepieModal } from '../recepies/recepie.modal';

@Component({
  selector: 'app-recepies-edit',
  templateUrl: './recepies-edit.component.html',
  styleUrls: ['./recepies-edit.component.scss'],
})
export class RecepiesEditComponent implements OnInit {
  rId: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.rId = +params['rId'];
      this.editMode = params['rId'] != null;
      this.initForm();
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredientsArr')).controls;
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let recipeIngredients: any = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecepie(this.rId);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              ingName: new FormControl(ingredient.ingName, Validators.required),
              ingAmt: new FormControl(ingredient.ingAmt, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      rName: new FormControl(recipeName, Validators.required),
      rImagePath: new FormControl(imagePath, Validators.required),
      rDesc: new FormControl(description, Validators.required),
      ingredientsArr: recipeIngredients,
    });
  }

  onSubmit() {
    const newRecipe = new RecepieModal(
      this.recipeForm.value.rName,
      this.recipeForm.value.rDesc,
      this.recipeForm.value.rImagePath,
      this.recipeForm.value.ingredientsArr
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.rId, newRecipe);
    }else{
      this.recipeService.addRecipe(newRecipe);
    }

    this.onCancel();
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredientsArr')).push(
      new FormGroup({
        ingName: new FormControl(null, Validators.required),
        ingAmt: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  deleteIngred(index: number){
    (<FormArray>this.recipeForm.get('ingredientsArr')).removeAt(index)
  }
}
