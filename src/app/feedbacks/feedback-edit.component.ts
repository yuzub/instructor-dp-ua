import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { FeedbackFbService } from "./feedback-fb.service";
import { InstructorFbService } from "../instructors/instructor-fb.service";

import { IFeedback } from "./feedback";
import { IInstructor } from "../instructors/instructor";

@Component({
  selector: 'ai-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})
export class FeedbackEditComponent implements OnInit {
  instructors$: FirebaseListObservable<IInstructor[]>;
  id: string;
  isNewFeedback: boolean;
  obj$: FirebaseObjectObservable<any>;
  feedback$: FirebaseObjectObservable<IFeedback>;
  pageTitle = 'Add Feedback';

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private feedbackFbService: FeedbackFbService,
    private instructorFbService: InstructorFbService) { }

  ngOnInit() {
    this.instructors$ = this.instructorFbService.getInstructors();
    this.id = this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${this.id}`;
    this.isNewFeedback = this.id == 'new';
    // console.log(this.isNewFeedback);
    // if (!this.isNewFeedback) this.getFeedback();
    !this.isNewFeedback ? this.getFeedback() : this.feedback$ = Observable.of({}) as FirebaseObjectObservable<IFeedback>;
  }

  getFeedback() {
    this.feedback$ = this.feedbackFbService.getFeedback(this.id);
  }

  addFeedback(feedback: IFeedback) {

    this.feedbackFbService.addFeedback(feedback)
      .then(_ => this._router.navigate(['/feedbacks']));
  }

  updateFeedback(feedbackKey: string, feedback: IFeedback) {
    this.feedbackFbService.updateFeedback(feedbackKey, feedback);
  }

  deleteFeedback(feedbackKey: string) {
    this.feedbackFbService.deleteFeedback(feedbackKey)
      .then(_ => this._router.navigate(['/feedbacks']));
  }

  onBack(): void {
    this._router.navigate(['/feedbacks']);
  }
}
