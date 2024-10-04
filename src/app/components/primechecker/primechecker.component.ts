import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-primechecker',
  templateUrl: './primechecker.component.html',
  styleUrl: './primechecker.component.css'
})
export class PrimecheckerComponent {
  number: number | null = null; // User input number
  resultMessage: string | null = null; // Result message

  // Function to check if a number is prime
  isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  // Function to check prime number and display result
  checkPrime() {
    if (this.number !== null) {
      if (this.isPrime(this.number)) {
        this.resultMessage = `${this.number} is a prime number.`;
      } else {
        this.resultMessage = `${this.number} is not a prime number.`;
      }
    } else {
      this.resultMessage = "Please enter a valid number.";
    }
  }

}
