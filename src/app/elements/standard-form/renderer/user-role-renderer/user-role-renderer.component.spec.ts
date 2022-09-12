import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleRendererComponent } from './user-role-renderer.component';

describe('UserRoleRendererComponent', () => {
  let component: UserRoleRendererComponent;
  let fixture: ComponentFixture<UserRoleRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRoleRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
