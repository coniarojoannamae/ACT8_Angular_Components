import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number | null = null; // The user-input number
  oddSum: number | null = null; // Variable to store the sum of odd numbers

  calculateOddSum() {
    this.oddSum = 0; // Reset the sum

    if (this.number !== null && this.number > 0) {
      for (let i = 1; i <= this.number; i += 2) {
        this.oddSum += i; // Add all odd numbers
      }
    }
  }
}
