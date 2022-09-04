import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitationSetEditComponent } from './limitation-set-edit.component';

describe('LimitationSetEditComponent', () => {
  let component: LimitationSetEditComponent;
  let fixture: ComponentFixture<LimitationSetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitationSetEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitationSetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
