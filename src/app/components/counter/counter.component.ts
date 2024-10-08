import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  number: number = 0;
  result: number = 0;
  show() {
    this.result = this.number;
    console.log(this.number);
  }
}
