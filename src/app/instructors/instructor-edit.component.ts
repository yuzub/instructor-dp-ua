import { Component, OnInit } from '@angular/core';
import { InstructorFbService } from "./instructor-fb.service";
import { FirebaseObjectObservable } from "angularfire2/database";
import { Router, ActivatedRoute } from "@angular/router";

import { IInstructor } from "./instructor";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

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
    // console.log(this.isNewInstructor);
    // if (!this.isNewInstructor) this.getInstructor();
    !this.isNewInstructor ? this.getInstructor() : this.instructor$ = Observable.of({}) as FirebaseObjectObservable<IInstructor>;


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

  addInstructor(instructor: IInstructor) {
    this.instructorFbService.addInstructor(instructor)
    .then(_ => this._router.navigate(['/instructors']) );
  }

  updateInstructor(instructorKey: string, instructor: IInstructor) {
    this.instructorFbService.updateInstructor(instructorKey, instructor);
  }

  deleteInstructor(instructorKey: string) {
    this.instructorFbService.deleteInstructor(instructorKey)
    .then(_ => this._router.navigate(['/instructors']) );
  }

  onBack(): void {
    this._router.navigate(['/instructors']);
  }
}
