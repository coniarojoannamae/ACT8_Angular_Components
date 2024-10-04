import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradecalculatorComponent } from './gradecalculator.component';

describe('GradecalculatorComponent', () => {
  let component: GradecalculatorComponent;
  let fixture: ComponentFixture<GradecalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradecalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
