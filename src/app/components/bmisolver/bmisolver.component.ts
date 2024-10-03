import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number | null = null; // Height in meters
  weight: number | null = null; // Weight in kilograms
  bmi: number | null = null; // Calculated BMI
  message: string = ''; // Message to show BMI category

  calculateBMI() {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height); // BMI formula
      this.bmi = parseFloat(this.bmi.toFixed(2)); // Round to two decimal places
      this.setBMICategory(this.bmi);
    }
  }

  setBMICategory(bmi: number) {
    if (bmi < 18.5) {
      this.message = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      this.message = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      this.message = 'Overweight';
    } else {
      this.message = 'Obesity';
    }
  }
}
