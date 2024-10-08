import { Component } from '@angular/core';

@Component({
  selector: 'app-dayofweekfinder',
  templateUrl: './dayofweekfinder.component.html',
  styleUrl: './dayofweekfinder.component.css'
})
export class DayofweekfinderComponent {
  selectedDate: string = '';
  dayOfWeek: string | null = null;

  findDayOfWeek(): void {
    if (this.selectedDate) {
      const date = new Date(this.selectedDate);
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      this.dayOfWeek = daysOfWeek[date.getDay()];
    } else {
      this.dayOfWeek = null;
    }
  }
}
