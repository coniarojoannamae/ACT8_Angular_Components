import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextreplacerComponent } from './textreplacer.component';

describe('TextreplacerComponent', () => {
  let component: TextreplacerComponent;
  let fixture: ComponentFixture<TextreplacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextreplacerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextreplacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
