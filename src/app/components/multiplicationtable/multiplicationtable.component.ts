import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  number: number | null = null;
  multiplicationTable: number[] = [];

  generateTable() {
    if (this.number !== null) {
      this.multiplicationTable = Array.from({ length: 10 }, (_, i) => (i + 1) * this.number!);
    }
  }
}
