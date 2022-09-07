import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityComboBoxComponent } from './entity-combo-box.component';

describe('EntityComboBoxComponent', () => {
  let component: EntityComboBoxComponent;
  let fixture: ComponentFixture<EntityComboBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityComboBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityComboBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
