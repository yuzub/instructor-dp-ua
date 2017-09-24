import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database";

import { IInstructor } from "./instructor";
import { Observable } from "rxjs/Observable";

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
    this.obj$.set({ name: obj.name })
      .then(_ => console.log('save obj - success'))
      .catch(error => console.log(error));
  }

  updateObj(obj) {
    this.obj$.update(obj)
      .then(_ => console.log('update obj - success'))
      .catch(error => console.log(error));
  }

  removeObj(obj) {
    this.obj$.remove()
      .then(_ => console.log('remove obj - success'))
      .catch(error => console.log(error));
  }

  // Working with Firebase List

  getInstructor(instructorKey: string): FirebaseObjectObservable<IInstructor> {
    return this.db.object(`/instructors/${instructorKey}`);
    // .catch(this.errorHandler);
  }

  getInstructors() {
    return this.instructors$;
    // .catch(this.errorHandler);
  }

  addInstructor(instructor: IInstructor) {
    return this.instructors$.push(instructor)
      .then(_ => console.log('add - success'))
      .catch(error => console.log(error));
  }

  updateInstructor(instructorKey: string, instructor: IInstructor) {
    return this.instructors$.update(instructorKey, instructor)
      .then(_ => console.log('update - success'))
      .catch(error => console.log(error));
  }

  deleteInstructor(instructorKey: string) {
    return this.instructors$.remove(instructorKey)
      .then(_ => console.log('delete - success'))
      .catch(error => console.log(error));
  }

  deleteEverything() {
    return this.instructors$.remove()
      .then(_ => console.log('delete all - success'))
      .catch(error => console.log(error));
  }

  private errorHandler(error) {
    console.log(error);
    return Observable.throw(error);
  }

}
