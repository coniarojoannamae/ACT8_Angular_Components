import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {
  inputText: string = '';
  uppercasedText: string = '';

  convertToUppercase() {
    this.uppercasedText = this.inputText.toUpperCase();
  }
}
