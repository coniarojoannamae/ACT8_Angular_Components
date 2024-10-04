import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-gradecalculator',
  templateUrl: './gradecalculator.component.html',
  styleUrl: './gradecalculator.component.css'
})
export class GradecalculatorComponent {
  grades: number[] = []; // Array to store grades
  averageGrade: number | null = null; // Variable to store average grade
  finalGrade: string | null = null; // Variable to store final grade message

  // Function to add a new grade to the list
  addGrade(grade: string) {
    const gradeValue = parseFloat(grade);
    if (!isNaN(gradeValue) && gradeValue >= 0 && gradeValue <= 100) {
      this.grades.push(gradeValue);
    }
  }

  // Function to calculate average and determine final grade
  calculateAverage() {
    if (this.grades.length > 0) {
      const total = this.grades.reduce((acc, val) => acc + val, 0);
      this.averageGrade = total / this.grades.length;

      // Determine final grade based on average
      if (this.averageGrade >= 90) {
        this.finalGrade = 'A';
      } else if (this.averageGrade >= 80) {
        this.finalGrade = 'B';
      } else if (this.averageGrade >= 70) {
        this.finalGrade = 'C';
      } else if (this.averageGrade >= 60) {
        this.finalGrade = 'D';
      } else {
        this.finalGrade = 'F';
      }
    } else {
      this.finalGrade = "No grades available to calculate.";
    }
  }

  // Function to reset the grades
  resetGrades() {
    this.grades = [];
    this.averageGrade = null;
    this.finalGrade = null;
  }
}
