import { Component, OnInit } from '@angular/core';
import { IInstructor } from "./instructor";
import { InstructorFbService } from "./instructor-fb.service";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  // selector: 'ai-instructors',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})

export class InstructorListComponent implements OnInit {
  instructors$: FirebaseListObservable<IInstructor[]>;

  pageTitle: string = 'Список автоинструкторов г. Днепр';
  imgWidth: number = 50;
  imgMargin: number = 2;
  showImg: boolean = false;
  errorMessage: string;

  _carFilter: string = '';
  get carFilter(): string {
    return this._carFilter;
  }
  set carFilter(value: string) {
    this._carFilter = value;
    this.filteredInstructors = (this.gearboxFilter || this.carFilter) ?
      this.performFilter(this.gearboxFilter, this.carFilter) : this.instructors;
  }

  _gearboxFilter: string;
  get gearboxFilter(): string {
    return this._gearboxFilter;
  }
  set gearboxFilter(value: string) {
    this._gearboxFilter = value;
    this.filteredInstructors = (this.gearboxFilter || this.carFilter) ?
      this.performFilter(this.gearboxFilter, this.carFilter) : this.instructors;
  }

  filteredInstructors: IInstructor[];
  instructors: IInstructor[] = [];

  constructor(private instructorFbService: InstructorFbService) { }

  toggleImg(): void {
    this.showImg = !this.showImg;
  }

  ngOnInit(): void {
    this.getInstructors();

    this.instructors$
      .subscribe(instructors => {
        this.instructors = instructors;
        this.filteredInstructors = this.instructors;
      },
      error => this.errorMessage = <any>error);
  }

  getInstructors() {
    this.instructors$ = this.instructorFbService.getInstructors();
  }

  performFilter(filterByGearBox: string, filterByCar: string): IInstructor[] {
    filterByGearBox = filterByGearBox.toLocaleLowerCase();
    filterByCar = filterByCar.toLocaleLowerCase();
    return this.instructors
      .filter((instructor: IInstructor) => instructor.gearbox.toLocaleLowerCase().indexOf(filterByGearBox) !== -1)
      .filter((instructor: IInstructor) => instructor.car.toLocaleLowerCase().indexOf(filterByCar) !== -1);
  }
}
