import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { InstructorService } from "./instructors/instructor.service";

@Component({
  selector: 'ai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InstructorService]
})
export class AppComponent {
  pageTitle = 'Ваш автоинструктор';
  instructors: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    // db.object('test').subscribe(console.log);
    this.instructors = db.list('/instructors');
  }
}
