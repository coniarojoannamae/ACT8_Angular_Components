import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {

  name: string = '';
  greeting: string = '';

  show(): void {
    if (this.name.trim()) {
      this.greeting = `Hello, ${this.name}! <br> Welcome to our website.`;
    } else {
      this.greeting = 'Please enter your name.';
    }
  }
}
