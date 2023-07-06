import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppinglistService } from 'src/app/shopping-list/shoppinglist.service';
import { IngredientModel } from '../../ingredientModel.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-ingredient-popup',
  templateUrl: './add-ingredient-popup.component.html',
  styleUrls: ['./add-ingredient-popup.component.scss'],
})
export class AddIngredientPopupComponent implements OnInit, OnDestroy {
  ingredientEditForm: FormGroup;
  editedItemIndex: number;
  // isEditMode: boolean = false;
  editedIngredient: IngredientModel;
  actionStatus: string = 'save';

  constructor(
    private formbuilder: FormBuilder,
    private slService: ShoppinglistService,
    @Inject(MAT_DIALOG_DATA) public editingRowData: any,
    private ref: MatDialogRef<AddIngredientPopupComponent>
  ) {}

  ngOnInit() {
    this.formInit();
    console.log(this.editingRowData);
    this.editedIngredient = this.editingRowData;
    if (this.editingRowData) {
      this.actionStatus = 'Update';
      this.ingredientEditForm.patchValue({
        ingName: this.editedIngredient.ingName,
        ingAmt: this.editedIngredient.ingAmt,
        freshness: this.editedIngredient.freshness,
        expiryDate: this.editedIngredient.expiryDate,
        ingredType: this.editedIngredient.ingredType,
      });
    }
  }

  formInit() {
    this.ingredientEditForm = this.formbuilder.group({
      ingName: ['', Validators.required],
      ingAmt: ['', Validators.required],
      freshness: ['', Validators.required],
      expiryDate: ['', Validators.required],
      ingredType: ['', Validators.required],
    });
  }

  onSubmitIngredient() {
    if (this.editingRowData) {
      this.slService
        .updateIngredient(this.ingredientEditForm.value, this.editingRowData.id)
        .subscribe((data) => {
          alert(data + 'this data is added');
          this.ref.close("update");
        });
      this.slService.ingredChanged.next(this.ingredientEditForm.value);
    } else {
      this.slService.postIngredient(this.ingredientEditForm.value).subscribe(
        (data) => {
          alert('product added');
          this.ingredientEditForm.reset();
          this.ref.close('save');
        },
        (error) => {
          console.error(error);
        }
      );
    }

    this.onCancel();
  }

  onCancel() {
    this.ref.close('popup closed');
  }

  ngOnDestroy(): void {}
}
