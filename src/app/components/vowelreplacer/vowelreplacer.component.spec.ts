import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelreplacerComponent } from './vowelreplacer.component';

describe('VowelreplacerComponent', () => {
  let component: VowelreplacerComponent;
  let fixture: ComponentFixture<VowelreplacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VowelreplacerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VowelreplacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
