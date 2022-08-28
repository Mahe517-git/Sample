import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArraySampleComponent } from './form-array-sample.component';

describe('FormArraySampleComponent', () => {
  let component: FormArraySampleComponent;
  let fixture: ComponentFixture<FormArraySampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArraySampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArraySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
