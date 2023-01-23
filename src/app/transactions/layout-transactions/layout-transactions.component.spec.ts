import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTransactionsComponent } from './layout-transactions.component';

describe('LayoutTransactionsComponent', () => {
  let component: LayoutTransactionsComponent;
  let fixture: ComponentFixture<LayoutTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
