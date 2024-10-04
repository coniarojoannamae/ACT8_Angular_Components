import { Component } from '@angular/core';

@Component({
  selector: 'app-leapyearchecker',
  templateUrl: './leapyearchecker.component.html',
  styleUrl: './leapyearchecker.component.css'
})
export class LeapyearcheckerComponent {
  year: number | null = null; // User input year
  resultMessage: string | null = null; // Result message

  // Function to check if a year is a leap year
  isLeapYear(year: number): boolean {
    // A year is a leap year if it is divisible by 4,
    // but not divisible by 100, unless it is also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  // Function to check the leap year and display the result
  checkLeapYear() {
    if (this.year !== null) {
      if (this.isLeapYear(this.year)) {
        this.resultMessage = `${this.year} is a leap year.`;
      } else {
        this.resultMessage = `${this.year} is not a leap year.`;
      }
    } else {
      this.resultMessage = "Please enter a valid year.";
    }
  }
}
