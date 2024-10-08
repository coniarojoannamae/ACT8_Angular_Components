import { Component } from '@angular/core';
import {CurrencyPipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-textreplacer',
  templateUrl: './textreplacer.component.html',
  styleUrl: './textreplacer.component.css'
})
export class TextreplacerComponent {
  originalText: string = '';
  wordToReplace: string = '';
  replacementWord: string = '';
  modifiedText: string | null = null;

  replaceText(): void {
    if (this.wordToReplace) {
      const regex = new RegExp(this.wordToReplace, 'gi');  // 'gi' for case-insensitive, global replacement
      this.modifiedText = this.originalText.replace(regex, this.replacementWord);
    } else {
      this.modifiedText = this.originalText;  // If no word is provided to replace, keep the text unchanged
    }
  }
}
