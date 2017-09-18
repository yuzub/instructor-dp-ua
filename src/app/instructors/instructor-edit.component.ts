import { Component, OnInit } from '@angular/core';
import { InstructorFbService } from "./instructor-fb.service";
import { FirebaseObjectObservable } from "angularfire2/database";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ai-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {
  instructor$: FirebaseObjectObservable<any>;
  pageTitle = 'Инструктор';

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private instructorFbService: InstructorFbService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.instructor$ = this.instructorFbService.getInstructor(id - 1 + '');
  }

  onBack(): void {
    this._router.navigate(['/instructors']);
  }
}
