import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
  inputWord: string = '';
  shuffledWord: string = '';

  shuffleWord() {
    if (this.inputWord) {
      const wordArray = this.inputWord.split('');
      for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // Swap letters
      }
      this.shuffledWord = wordArray.join('');
    }
  }
}
