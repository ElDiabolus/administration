import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitationEditComponent } from './limitation-edit.component';

describe('LimitationEditComponent', () => {
  let component: LimitationEditComponent;
  let fixture: ComponentFixture<LimitationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
