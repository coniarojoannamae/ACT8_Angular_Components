import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelscounterComponent } from './vowelscounter.component';

describe('VowelscounterComponent', () => {
  let component: VowelscounterComponent;
  let fixture: ComponentFixture<VowelscounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VowelscounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VowelscounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
