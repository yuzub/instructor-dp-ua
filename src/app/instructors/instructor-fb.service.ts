import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database";

import { IInstructor } from "./instructor";

@Injectable()
export class InstructorFbService {
  instructors$: FirebaseListObservable<any[]>;
  // instructors$: FirebaseObjectObservable<IInstructor>;

  constructor(private db: AngularFireDatabase) {
    this.instructors$ = this.db.list('/instructors');
  }

  getInstructor(instructorKey: string) {
    return this.db.object(`/instructors/${instructorKey}`);
  }

  getInstructors() {
    return this.instructors$;
  }

  addInstructor(instructor: IInstructor) {
    this.instructors$.push(instructor)
      .then(_ => console.log('add - success'))
      .catch(error => console.log(error));
  }

  updateInstructor(instructorKey: string, instructor: IInstructor) {
    this.instructors$.update(instructorKey, instructor)
      .then(_ => console.log('update - success'))
      .catch(error => console.log(error));
  }

  deleteInstructor(instructorKey: string) {
    this.instructors$.remove(instructorKey)
      .then(_ => console.log('delete - success'))
      .catch(error => console.log(error));
  }

  deleteEverything() {
    this.instructors$.remove()
    .then(_ => console.log('delete all - success'))
    .catch(error => console.log(error));
  }

}
