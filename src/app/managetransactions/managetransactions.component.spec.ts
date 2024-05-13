import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetransactionsComponent } from './managetransactions.component';

describe('ManagetransactionsComponent', () => {
  let component: ManagetransactionsComponent;
  let fixture: ComponentFixture<ManagetransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagetransactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagetransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
