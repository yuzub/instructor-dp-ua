import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database";

import { IFeedback } from "./feedback";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FeedbackFbService {
  feedbacks$: FirebaseListObservable<IFeedback[]>;

  constructor(private db: AngularFireDatabase) {
    this.feedbacks$ = this.db.list('/feedbacks');
  }

  // Working with Firebase List

  getFeedback(feedbackKey: string): FirebaseObjectObservable<IFeedback> {
    return this.db.object(`/feedbacks/${feedbackKey}`);
    // .catch(this.errorHandler);
  }

  getFeedbacks() {
    return this.feedbacks$;
    // .catch(this.errorHandler);
  }

  addFeedback(feedback: IFeedback) {
    return this.feedbacks$.push(feedback)
      .then(_ => console.log('add feedback - success'))
      .catch(error => console.log(error));
  }

  updateFeedback(feedbackKey: string, feedback: IFeedback) {
    return this.feedbacks$.update(feedbackKey, feedback)
      .then(_ => console.log('update feedback - success'))
      .catch(error => console.log(error));
  }

  deleteFeedback(feedbackKey: string) {
    return this.feedbacks$.remove(feedbackKey)
      .then(_ => console.log('delete feedback - success'))
      .catch(error => console.log(error));
  }

  deleteEverything() {
    return this.feedbacks$.remove()
      .then(_ => console.log('delete all feedbacks - success'))
      .catch(error => console.log(error));
  }

  private errorHandler(error) {
    console.log(error);
    return Observable.throw(error);
  }

}
