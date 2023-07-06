import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientPopupComponent } from './add-ingredient-popup.component';

describe('AddIngredientPopupComponent', () => {
  let component: AddIngredientPopupComponent;
  let fixture: ComponentFixture<AddIngredientPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngredientPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIngredientPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
