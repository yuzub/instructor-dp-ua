import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { IInstructor } from "./instructor";

@Component({
  selector: 'ai-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {
  pageTitle = 'Инструктор';
  instructor: IInstructor;
  instructorFB$: FirebaseObjectObservable<IInstructor>;
  
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private db: AngularFireDatabase) {
    // this.instructorFB = db.object(`/instructors/${id}`);
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.instructorFB$ = this.db.object(`/instructors/${id-1}`);
    this.instructor = {
      "instructorId": 1,
      "instructorName": "Владимиров Владимир Алексеевич",
      "car": "Chevrolet Aveo",
      "gearbox": "механика",
      "cityarea": "Центр",
      "price90min": 190,
      "starRating": 4.8,
      "photoUrl": "http://res.cloudinary.com/yuzub/image/upload/v1505128983/panda_vmckn8.jpg",
      "photoCarUrl": "",
      "email": "",
      "phone": ""
    };
  }

onBack(): void {
this._router.navigate(['/instructors']);
}

}
