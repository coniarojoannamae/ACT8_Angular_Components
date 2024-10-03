import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  randomNumber: number = 0;
  userGuess: number | null = null;
  message: string = '';
  attempts: number = 0;

  constructor() {
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    this.attempts = 0; // Reset attempts
    this.message = ''; // Reset message
  }

  checkGuess() {
    if (this.userGuess !== null) {
      this.attempts++;
      if (this.userGuess < this.randomNumber) {
        this.message = 'Too low! Try again.';
      } else if (this.userGuess > this.randomNumber) {
        this.message = 'Too high! Try again.';
      } else {
        this.message = `Congratulations! You guessed it in ${this.attempts} attempts.`;
      }
    }
  }

  resetGame() {
    this.generateRandomNumber(); // Generate a new random number
    this.userGuess = null; // Reset user guess
  }
}
