import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitationListComponent } from './limitation-list.component';

describe('LimitationListComponent', () => {
  let component: LimitationListComponent;
  let fixture: ComponentFixture<LimitationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
