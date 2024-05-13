import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetplansComponent } from './budgetplans.component';

describe('BudgetplansComponent', () => {
  let component: BudgetplansComponent;
  let fixture: ComponentFixture<BudgetplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
