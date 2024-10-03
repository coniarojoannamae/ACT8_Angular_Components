import { Component } from '@angular/core';
import {DecimalPipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  item: string = '';
  shoppingList: string[] = [];

  addItem() {
    if (this.item) {
      this.shoppingList.push(this.item);
      this.item = ''; // Clear the input field after adding
    }
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1); // Remove the item at the specified index
  }
}
