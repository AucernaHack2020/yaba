import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientElementComponent } from './ingredient-element.component';

describe('IngredientElementComponent', () => {
  let component: IngredientElementComponent;
  let fixture: ComponentFixture<IngredientElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
