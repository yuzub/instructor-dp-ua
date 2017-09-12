import { Component } from '@angular/core';
import { InstructorService } from "./instructors/instructor.service";

@Component({
  selector: 'ai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InstructorService]
})
export class AppComponent {
  title = 'Ваш автоинструктор';
}
