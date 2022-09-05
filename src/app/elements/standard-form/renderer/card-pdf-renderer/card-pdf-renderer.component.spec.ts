import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPdfRendererComponent } from './card-pdf-renderer.component';

describe('CardPdfRendererComponent', () => {
  let component: CardPdfRendererComponent;
  let fixture: ComponentFixture<CardPdfRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPdfRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPdfRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
