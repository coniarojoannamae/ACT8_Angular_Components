import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  interest: number | null = null;
  totalAmount: number | null = null;

  calculateInterest() {
    if (this.principal && this.rate && this.time) {
      // Simple Interest formula: SI = (P * R * T) / 100
      this.interest = (this.principal * this.rate * this.time) / 100;
      this.totalAmount = this.principal + this.interest;
    }
  }
}
