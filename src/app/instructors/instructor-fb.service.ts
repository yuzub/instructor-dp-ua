import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database";

import { IInstructor } from "./instructor";

@Injectable()
export class InstructorFbService {
  obj$: FirebaseObjectObservable<any>;
  instructors$: FirebaseListObservable<IInstructor[]>;

  constructor(private db: AngularFireDatabase) {
    this.obj$ = this.db.object('/someobj');
    this.instructors$ = this.db.list('/instructors');
  }

// Working with Firebase Object

  saveObj(obj) {
    this.obj$.set(obj);
  }

// Working with Firebase List

  getInstructor(instructorKey: string): FirebaseObjectObservable<IInstructor> {
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
