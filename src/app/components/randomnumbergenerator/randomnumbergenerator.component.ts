import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css'
})
export class RandomnumbergeneratorComponent {
  min: number | null = null;
  max: number | null = null;
  randomNumber: number | null = null;

  generateRandomNumber() {
    if (this.min !== null && this.max !== null && this.min < this.max) {
      this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    } else {
      this.randomNumber = null; // Reset if input is invalid
    }
  }
}
