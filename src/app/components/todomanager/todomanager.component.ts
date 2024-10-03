import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
  task: string = '';
  todoList: string[] = [];

  addTask() {
    if (this.task) {
      this.todoList.push(this.task);
      this.task = ''; // Clear the input field after adding
    }
  }

  removeTask(index: number) {
    this.todoList.splice(index, 1); // Remove the task at the specified index
  }
}
