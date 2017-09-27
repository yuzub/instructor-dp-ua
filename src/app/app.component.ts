import { Component } from '@angular/core';
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'ai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent {
  pageTitle = 'Ваш автоинструктор';
  imgWidth: number = 25;
  imgMargin: number = 2;
  constructor(public authService: AuthService) { }
}
