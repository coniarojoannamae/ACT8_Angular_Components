import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  word: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const normalizedWord = this.word.toLowerCase().replace(/[\W_]/g, ''); // Removes non-alphanumeric characters
    this.isPalindrome = normalizedWord === normalizedWord.split('').reverse().join('');
  }
}
