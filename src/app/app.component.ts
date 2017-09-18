import { Component } from '@angular/core';

@Component({
  selector: 'ai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent {
  pageTitle = 'Ваш автоинструктор';
  constructor() { }
}
