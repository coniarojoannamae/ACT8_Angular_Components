import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountcalculatorComponent } from './discountcalculator.component';

describe('DiscountcalculatorComponent', () => {
  let component: DiscountcalculatorComponent;
  let fixture: ComponentFixture<DiscountcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountcalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
