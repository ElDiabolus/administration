import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEntityListComponent } from './sub-entity-list.component';

describe('SubEntityListComponent', () => {
  let component: SubEntityListComponent;
  let fixture: ComponentFixture<SubEntityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubEntityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEntityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
