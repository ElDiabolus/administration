import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningHoursRendererComponent } from './opening-hours-renderer.component';

describe('OpeningHoursRendererComponent', () => {
  let component: OpeningHoursRendererComponent;
  let fixture: ComponentFixture<OpeningHoursRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningHoursRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningHoursRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
