import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringRendererComponent } from './string-renderer.component';

describe('StringRendererComponent', () => {
  let component: StringRendererComponent;
  let fixture: ComponentFixture<StringRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
