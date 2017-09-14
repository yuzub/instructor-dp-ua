import { Component, OnInit } from '@angular/core';
import { IInstructor } from "./instructor";

@Component({
  selector: 'ai-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {
  pageTitle = 'Инструктор';
  instructor: IInstructor;

  constructor() { }

  ngOnInit() {
  }

}
