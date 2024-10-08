import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  name: string = " ";
  email: string = " ";
  resultName: string = " ";
  resultEmail: string = " ";
  show() {
    this.resultName = this.name;
    console.log(this.name);
    this.resultEmail = this.email;
    console.log(this.email);

  }
}
