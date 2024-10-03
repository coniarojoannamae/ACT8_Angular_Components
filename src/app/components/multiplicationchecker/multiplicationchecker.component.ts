import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
  message: string = '';

  checkMultiple() {
    if (this.number1 !== null && this.number2 !== null) {
      if (this.number2 === 0) {
        this.message = "Cannot divide by zero.";
      } else if (this.number1 % this.number2 === 0) {
        this.message = `${this.number1} is a multiple of ${this.number2}.`;
      } else {
        this.message = `${this.number1} is not a multiple of ${this.number2}.`;
      }
    }
  }
}
