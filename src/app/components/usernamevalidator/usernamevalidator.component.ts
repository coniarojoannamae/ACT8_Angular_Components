import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = '';
  isValid: boolean | null = null; // Store the validity status
  message: string = ''; // Message to show validation result

  validateUsername() {
    const usernamePattern = /^[a-zA-Z0-9_]{5,15}$/; // Username must be 5-15 characters long and can contain letters, numbers, and underscores

    if (this.username.match(usernamePattern)) {
      this.isValid = true;
      this.message = 'Username is valid!';
    } else {
      this.isValid = false;
      this.message = 'Invalid username! It must be 5-15 characters long and can only contain letters, numbers, and underscores.';
    }
  }
}
