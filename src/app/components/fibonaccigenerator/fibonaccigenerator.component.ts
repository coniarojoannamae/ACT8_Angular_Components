import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  count: number | null = null; // Number of Fibonacci numbers to generate
  fibonacciSequence: number[] = []; // Array to store the Fibonacci sequence

  generateFibonacci() {
    this.fibonacciSequence = []; // Reset the sequence

    if (this.count && this.count > 0) {
      let a = 0, b = 1;
      this.fibonacciSequence.push(a); // Push the first Fibonacci number

      for (let i = 1; i < this.count; i++) {
        this.fibonacciSequence.push(b); // Add the next number
        const next = a + b; // Calculate the next Fibonacci number
        a = b; // Update the values of a and b
        b = next;
      }
    }
  }
}
