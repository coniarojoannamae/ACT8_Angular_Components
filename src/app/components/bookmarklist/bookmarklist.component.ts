import { Component } from '@angular/core';
import {DecimalPipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  bookmark: string = '';
  bookmarks: string[] = [];

  addBookmark() {
    if (this.bookmark) {
      this.bookmarks.push(this.bookmark);
      this.bookmark = '';  // Clear the input field after adding
    }
  }
}
