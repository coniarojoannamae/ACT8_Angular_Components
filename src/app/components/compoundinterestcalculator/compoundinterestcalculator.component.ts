import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number | null = null; // Frequency of compounding (e.g., 1 for yearly, 4 for quarterly)
  compoundInterest: number | null = null;
  totalAmount: number | null = null;

  calculateCompoundInterest() {
    if (this.principal && this.rate && this.time && this.frequency) {
      // Compound Interest formula: A = P (1 + r/n)^(n*t)
      const r = this.rate / 100;
      const n = this.frequency;
      const t = this.time;

      this.totalAmount = this.principal * Math.pow((1 + r / n), n * t);
      this.totalAmount = parseFloat(this.totalAmount.toFixed(2)); // Round to two decimal places

      this.compoundInterest = this.totalAmount - this.principal; // Interest is total amount - principal
    }
  }
}
