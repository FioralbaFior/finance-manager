import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModalComponent } from './edit-item-modal.component';

describe('EditItemMondalComponent', () => {
  let component: EditItemModalComponent;
  let fixture: ComponentFixture<EditItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditItemModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
