import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnMapingComponent } from './column-maping.component';

describe('ColumnMapingComponent', () => {
  let component: ColumnMapingComponent;
  let fixture: ComponentFixture<ColumnMapingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnMapingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnMapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
