import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderSelectRendererComponent } from './gender-select-renderer.component';

describe('GenderSelectRendererComponent', () => {
  let component: GenderSelectRendererComponent;
  let fixture: ComponentFixture<GenderSelectRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderSelectRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderSelectRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
