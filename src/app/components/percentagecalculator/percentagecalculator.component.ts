import { Component } from '@angular/core';

@Component({
  selector: 'app-percentagecalculator',
  templateUrl: './percentagecalculator.component.html',
  styleUrl: './percentagecalculator.component.css'
})
export class PercentagecalculatorComponent {
  value: number = 0;
  total: number = 0;
  percentage: number | null = null;
  calculatePercentage(): void {
    if (this.total > 0) {
      this.percentage = (this.value / this.total) * 100;
    } else {
      this.percentage = null;
    }
  }
}
