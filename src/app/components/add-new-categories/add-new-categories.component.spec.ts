import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCategoriesComponent } from './add-new-categories.component';

describe('AddNewCategoriesComponent', () => {
  let component: AddNewCategoriesComponent;
  let fixture: ComponentFixture<AddNewCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
