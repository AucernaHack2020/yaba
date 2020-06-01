import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsSelectionComponent } from './ingredients-selection.component';

describe('IngredientsSelectionComponent', () => {
  let component: IngredientsSelectionComponent;
  let fixture: ComponentFixture<IngredientsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
