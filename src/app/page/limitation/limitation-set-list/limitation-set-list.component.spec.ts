import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitationSetListComponent } from './limitation-set-list.component';

describe('LimitationSetListComponent', () => {
  let component: LimitationSetListComponent;
  let fixture: ComponentFixture<LimitationSetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitationSetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitationSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
