import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiesEditComponent } from './recepies-edit.component';

describe('RecepiesEditComponent', () => {
  let component: RecepiesEditComponent;
  let fixture: ComponentFixture<RecepiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepiesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
