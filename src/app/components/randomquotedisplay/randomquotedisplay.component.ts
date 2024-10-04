import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
// Array of quotes
  quotes: string[] = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
    "I’m not a great programmer; I’m just a good programmer with great habits. ― Kent Beck"
  ];

  randomQuote: string | null = null; // Variable to store the selected random quote

  // Function to select a random quote
  displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length); // Generate a random index
    this.randomQuote = this.quotes[randomIndex]; // Select the random quote
  }
}
