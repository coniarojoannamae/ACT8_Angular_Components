import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  number1: number | null = null; // First number (dividend)
  number2: number | null = null; // Second number (divisor)
  resultMessage: string | null = null; // Variable to store the result message

  // Function to check divisibility
  checkDivisibility() {
    if (this.number1 !== null && this.number2 !== null && this.number2 !== 0) {
      if (this.number1 % this.number2 === 0) {
        this.resultMessage = `${this.number1} is divisible by ${this.number2}.`;
      } else {
        this.resultMessage = `${this.number1} is not divisible by ${this.number2}.`;
      }
    } else if (this.number2 === 0) {
      this.resultMessage = "Division by zero is not allowed.";
    } else {
      this.resultMessage = "Please enter both numbers.";
    }
  }
}
