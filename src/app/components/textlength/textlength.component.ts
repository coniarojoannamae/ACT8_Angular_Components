import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputString : string = " ";
  result: number | null = null;

  GetLength(){
    this.result = this.inputString.length;
  }
}
