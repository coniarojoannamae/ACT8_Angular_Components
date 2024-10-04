import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-squarerootcalculator',
  templateUrl: './squarerootcalculator.component.html',
  styleUrl: './squarerootcalculator.component.css'
})
export class SquarerootcalculatorComponent {
  inputNumber: number | null = null; // User input number
  squareRoot: number | null = null; // Variable to store square root
  resultMessage: string | null = null; // Result message

  // Function to calculate square root
  calculateSquareRoot() {
    if (this.inputNumber !== null && this.inputNumber >= 0) {
      this.squareRoot = Math.sqrt(this.inputNumber); // Calculate square root
      this.resultMessage = `The square root of ${this.inputNumber} is: ${this.squareRoot}`;
    } else {
      this.resultMessage = "Please enter a valid non-negative number.";
    }
  }
}
