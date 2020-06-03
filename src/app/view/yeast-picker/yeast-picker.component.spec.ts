import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeastPickerComponent } from './yeast-picker.component';

describe('YeastPickerComponent', () => {
  let component: YeastPickerComponent;
  let fixture: ComponentFixture<YeastPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeastPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeastPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
