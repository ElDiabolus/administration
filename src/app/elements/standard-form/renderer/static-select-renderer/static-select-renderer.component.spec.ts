import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSelectRendererComponent } from './static-select-renderer.component';

describe('StaticSelectRendererComponent', () => {
  let component: StaticSelectRendererComponent;
  let fixture: ComponentFixture<StaticSelectRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticSelectRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticSelectRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
