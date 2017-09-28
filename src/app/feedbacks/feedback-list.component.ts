import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2/database";
import { IFeedback } from "./feedback";
import { FeedbackFbService } from "./feedback-fb.service";
import { InstructorFbService } from '../instructors/instructor-fb.service';
import { IInstructor } from '../instructors/instructor';

@Component({
  selector: 'ai-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  instructors$: FirebaseListObservable<IInstructor[]>;
  feedbacks$: FirebaseListObservable<IFeedback[]>;

  pageTitle: string = 'Отзывы';
  errorMessage: string;

  feedbacks: IFeedback[] = [];

  constructor(
    private instructorFbService: InstructorFbService,
    private feedbackFbService: FeedbackFbService) { }

  ngOnInit(): void {
    this.instructors$ = this.instructorFbService.getInstructors();
    this.getFeedbacks();

    this.feedbacks$
      .subscribe(feedbacks => {
        // console.log(feedbacks);
        this.feedbacks = feedbacks;
        console.log(this.feedbacks);
      },
      error => this.errorMessage = <any>error);
  }

  getFeedbacks() {
    this.feedbacks$ = this.feedbackFbService.getFeedbacks();
    console.log(this.feedbacks$);
  }

}
