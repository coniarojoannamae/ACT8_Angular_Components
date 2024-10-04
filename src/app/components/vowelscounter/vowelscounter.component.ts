import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-vowelscounter',

  templateUrl: './vowelscounter.component.html',
  styleUrl: './vowelscounter.component.css'
})
export class VowelscounterComponent {
  inputString: string = ''; // User input string
  vowelsCount: number = 0; // Variable to store count of vowels
  resultMessage: string | null = null; // Result message

  // Function to count vowels in the input string
  countVowels() {
    const vowels = 'aeiouAEIOU'; // Vowels to count (case-insensitive)
    this.vowelsCount = 0; // Reset count for each new input

    for (let char of this.inputString) {
      if (vowels.includes(char)) {
        this.vowelsCount++;
      }
    }
    // Set the result message
    this.resultMessage = `Number of vowels in "${this.inputString}" is: ${this.vowelsCount}`;
  }
}
