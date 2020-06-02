import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainPickerComponent } from './grain-picker.component';

describe('GrainPickerComponent', () => {
  let component: GrainPickerComponent;
  let fixture: ComponentFixture<GrainPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrainPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
