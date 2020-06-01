import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSelectorItemComponent } from './style-selector-item.component';

describe('StyleSelectorItemComponent', () => {
  let component: StyleSelectorItemComponent;
  let fixture: ComponentFixture<StyleSelectorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleSelectorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSelectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
