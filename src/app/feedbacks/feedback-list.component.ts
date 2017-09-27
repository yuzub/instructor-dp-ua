import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2/database";
import { IFeedback } from "./feedback";
import { FeedbackFbService } from "./feedback-fb.service";

@Component({
  selector: 'ai-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbacks$: FirebaseListObservable<IFeedback[]>;

    pageTitle: string = 'Отзывы';
    errorMessage: string;

    feedbacks: IFeedback[] = [];

    constructor(private feedbackFbService: FeedbackFbService) { }

    ngOnInit(): void {
      this.getFeedbacks();

      this.feedbacks$
        .subscribe(feedbacks => {
          // console.log(feedbacks);
          this.feedbacks = feedbacks;
        },
        error => this.errorMessage = <any>error);
    }

    getFeedbacks() {
      this.feedbacks$ = this.feedbackFbService.getFeedbacks();
    }

}
