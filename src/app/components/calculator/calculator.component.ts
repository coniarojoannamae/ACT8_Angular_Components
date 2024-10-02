import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  resultDisplay: number = 0;

  //Addition
  showAdd() {
    this.resultDisplay =this.num1 + this.num2;

  }

  //Subtraction
  showSubtract() {
    this.resultDisplay =this.num1 - this.num2;
  }

  // Multiplication
  showMultiply() {
    this.resultDisplay =this.num1 * this.num2;

  }

  //Division
  showDivide() {
    this.resultDisplay =this.num1 / this.num2;
  }


}
