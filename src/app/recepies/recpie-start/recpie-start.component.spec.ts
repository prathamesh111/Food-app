import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpieStartComponent } from './recpie-start.component';

describe('RecpieStartComponent', () => {
  let component: RecpieStartComponent;
  let fixture: ComponentFixture<RecpieStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecpieStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecpieStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
