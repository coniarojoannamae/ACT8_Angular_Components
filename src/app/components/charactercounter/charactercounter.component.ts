import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {
  inputText: string = '';
  characterCount: number = 0;

  updateCharacterCount() {
    this.characterCount = this.inputText.length;
  }
}
