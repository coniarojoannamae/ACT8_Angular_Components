import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayhellowolrdComponent } from './displayhellowolrd.component';

describe('DisplayhellowolrdComponent', () => {
  let component: DisplayhellowolrdComponent;
  let fixture: ComponentFixture<DisplayhellowolrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayhellowolrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayhellowolrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
