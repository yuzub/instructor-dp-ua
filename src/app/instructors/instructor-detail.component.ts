import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { IInstructor } from "./instructor";
import { InstructorFbService } from "./instructor-fb.service";

@Component({
  selector: 'ai-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {
  pageTitle = 'Инструктор';
  instructor: IInstructor;
  instructor$: FirebaseObjectObservable<IInstructor>;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private instructorFbService: InstructorFbService) {
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.instructor$ = this.instructorFbService.getInstructor(id - 1 + '');
  }

  onBack(): void {
    this._router.navigate(['/instructors']);
  }

}
