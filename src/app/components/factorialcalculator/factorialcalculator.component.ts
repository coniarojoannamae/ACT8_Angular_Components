import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  number: number | null = null;
  factorial: number | null = null;

  calculateFactorial() {
    if (this.number !== null && this.number >= 0) {
      this.factorial = this.factorialOf(this.number);
    } else {
      this.factorial = null; // Reset if input is invalid
    }
  }

  private factorialOf(n: number): number {
    if (n === 0 || n === 1) {
      return 1; // Base case: 0! = 1 and 1! = 1
    }
    return n * this.factorialOf(n - 1); // Recursive case
  }

}
