import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  userName: string = ''; // Variable to store user input
  upperCaseName: string | null = null; // Variable to store the uppercase version of the name

  // Function to convert the user's name to uppercase
  displayUppercaseName() {
    this.upperCaseName = this.userName.toUpperCase();
  }
}
