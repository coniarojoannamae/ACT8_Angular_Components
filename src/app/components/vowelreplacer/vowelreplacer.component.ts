import { Component } from '@angular/core';

@Component({
  selector: 'app-vowelreplacer',
  templateUrl: './vowelreplacer.component.html',
  styleUrl: './vowelreplacer.component.css'
})
export class VowelreplacerComponent {
  inputText: string = '';
  replacementChar: string = '';
  modifiedText: string | null = null;

  replaceVowels(): void {
    if (this.replacementChar.length === 1) {
      const vowelsRegex = /[aeiouAEIOU]/g;  // Regular expression to match all vowels
      this.modifiedText = this.inputText.replace(vowelsRegex, this.replacementChar);
    } else {
      this.modifiedText = null;  // If replacementChar is not a single character, clear output
    }
  }
}
