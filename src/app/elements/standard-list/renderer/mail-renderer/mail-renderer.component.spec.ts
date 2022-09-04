import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailRendererComponent } from './mail-renderer.component';

describe('MailRendererComponent', () => {
  let component: MailRendererComponent;
  let fixture: ComponentFixture<MailRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
