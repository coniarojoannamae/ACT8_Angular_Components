import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarerootcalculatorComponent } from './squarerootcalculator.component';

describe('SquarerootcalculatorComponent', () => {
  let component: SquarerootcalculatorComponent;
  let fixture: ComponentFixture<SquarerootcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquarerootcalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquarerootcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
