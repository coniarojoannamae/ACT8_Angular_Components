import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-discountcalculator',
  templateUrl: './discountcalculator.component.html',
  styleUrl: './discountcalculator.component.css'
})
export class DiscountcalculatorComponent {
  originalPrice: number = 0;
  discountPercentage: number = 0;
  finalPrice: number | null = null;

  calculateDiscount(): void {
    if (this.discountPercentage >= 0 && this.originalPrice >= 0) {
      const discountAmount = (this.originalPrice * this.discountPercentage) / 100;
      this.finalPrice = this.originalPrice - discountAmount;
    } else {
      this.finalPrice = null;
    }
  }
}
