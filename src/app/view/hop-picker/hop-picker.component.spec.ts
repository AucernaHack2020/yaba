import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopPickerComponent } from './hop-picker.component';

describe('HopPickerComponent', () => {
  let component: HopPickerComponent;
  let fixture: ComponentFixture<HopPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
