import { Component } from '@angular/core';


@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  dollar: number | null = null;
  php: number | null = null;
  conversionRate: number = 56;

  convertToPhp(): void {
    if (this.dollar !== null) {
      this.php = this.dollar * this.conversionRate;
    } else {
      this.php = null;
    }
  }
}
