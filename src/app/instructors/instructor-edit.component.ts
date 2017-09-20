import { Component, OnInit } from '@angular/core';
import { InstructorFbService } from "./instructor-fb.service";
import { FirebaseObjectObservable } from "angularfire2/database";
import { Router, ActivatedRoute } from "@angular/router";

import { IInstructor } from "./instructor";

@Component({
  selector: 'ai-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {
  id: string;
  isNewInstructor: boolean;
  obj$: FirebaseObjectObservable<any>;
  instructor$: FirebaseObjectObservable<IInstructor>;
  pageTitle = 'Инструктор';

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private instructorFbService: InstructorFbService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${this.id}`;
    this.isNewInstructor = this.id == 'new';
    if (!this.isNewInstructor) this.getInstructor();


    this.obj$ = this.instructorFbService.obj$;
  }

  getInstructor() {
    this.instructor$ = this.instructorFbService.getInstructor(this.id);
  }

  saveObj(obj) {
    this.instructorFbService.saveObj(obj);
  }

  updateObj(obj) {
    this.instructorFbService.updateObj(obj);
  }

  removeObj(obj) {
    this.instructorFbService.removeObj(obj);
  }

  onBack(): void {
    this._router.navigate(['/instructors']);
  }
}
