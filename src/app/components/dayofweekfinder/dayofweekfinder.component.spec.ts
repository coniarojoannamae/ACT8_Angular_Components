import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayofweekfinderComponent } from './dayofweekfinder.component';

describe('DayofweekfinderComponent', () => {
  let component: DayofweekfinderComponent;
  let fixture: ComponentFixture<DayofweekfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayofweekfinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayofweekfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
