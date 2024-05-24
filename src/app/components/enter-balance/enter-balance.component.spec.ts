import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBalanceComponent } from './enter-balance.component';

describe('EnterBalanceComponent', () => {
  let component: EnterBalanceComponent;
  let fixture: ComponentFixture<EnterBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterBalanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
