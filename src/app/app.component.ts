import { Component } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  selector: 'ai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent {
  pageTitle = 'Ваш автоинструктор';
  constructor(public authService: AuthService) { }
}
