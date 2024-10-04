import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  numberInput: number | null = null; // The user-input number
  selectedCurrency: string = 'USD'; // Default currency
  formattedCurrency: string | null = null; // Formatted currency result

  // Function to format the number based on the selected currency
  formatCurrency() {
    if (this.numberInput !== null) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.selectedCurrency
      });
      this.formattedCurrency = formatter.format(this.numberInput);
    }
  }
}
