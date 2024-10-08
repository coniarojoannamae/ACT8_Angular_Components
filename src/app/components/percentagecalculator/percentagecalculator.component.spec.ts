import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentagecalculatorComponent } from './percentagecalculator.component';

describe('PercentagecalculatorComponent', () => {
  let component: PercentagecalculatorComponent;
  let fixture: ComponentFixture<PercentagecalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentagecalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentagecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
