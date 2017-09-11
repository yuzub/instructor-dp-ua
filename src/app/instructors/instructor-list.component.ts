import { Component, OnInit } from '@angular/core';
import { IInstructor } from "./instructor";

@Component ({
    selector: 'ai-instructors',
    templateUrl: './instructor-list.component.html',
    styleUrls: ['./instructor-list.component.css']
})

export class InstructorListComponent implements OnInit {
  pageTitle: string = 'Список автоинструкторов г. Днепр';
  imgWidth: number = 50;
  imgMargin: number = 2;
  showImg: boolean = false;
  // gearboxFilter: string = 'механика';

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
  instructors: IInstructor[] = [
    {
    "instructorId": 1,
    "instructorName": "Владимиров Владимир Алексеевич",
    "car": "Chevrolet Aveo",
    "gearbox":"механика",
    "cityarea": "Центр",
    "price90min": 190,
    "starRating": 4.5,
    "photoUrl": "http://res.cloudinary.com/yuzub/image/upload/v1505128983/panda_vmckn8.jpg",
    "photoCarUrl": "",
    "email": "",
    "phone": ""
    },
    {
    "instructorId": 2,
    "instructorName": "Соловьев Вадим Александрович",
    "car": "ZAZ Vida",
    "gearbox":"механика",
    "cityarea": "Центр Тополь",
    "price90min": 200,
    "starRating": 3.5,
    "photoUrl": "http://res.cloudinary.com/yuzub/image/upload/v1505128983/panda_vmckn8.jpg",
    "photoCarUrl": "",
    "email": "",
    "phone": ""
    },
    {
    "instructorId": 3,
    "instructorName": "Разумный Юрий Викторович",
    "car": "Chevrolet Lachetti",
    "gearbox":"механика",
    "cityarea": "Центр Тополь",
    "price90min": 200,
    "starRating": 4.0,
    "photoUrl": "http://res.cloudinary.com/yuzub/image/upload/v1505128983/panda_vmckn8.jpg",
    "photoCarUrl": "",
    "email": "",
    "phone": ""
    },
    {
      "instructorId": 3,
      "instructorName": "Владимиров Владислав Владимирович",
      "car": "Nissan Note",
      "gearbox":"автомат",
      "cityarea": "Центр",
      "price90min": 300,
      "starRating": 4.0,
      "photoUrl": "http://res.cloudinary.com/yuzub/image/upload/v1505128983/panda_vmckn8.jpg",
      "photoCarUrl": "",
      "email": "",
      "phone": ""
      }
  ];

  constructor() {
    this.filteredInstructors = this.instructors;
    this.gearboxFilter = '';
  }

  toggleImg(): void {
      this.showImg = !this.showImg;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }

  performFilter(filterByGearBox: string, filterByCar: string): IInstructor[] {
    filterByGearBox = filterByGearBox.toLocaleLowerCase();
    filterByCar = filterByCar.toLocaleLowerCase();
    return this.instructors
      .filter((instructor: IInstructor) => instructor.gearbox.toLocaleLowerCase().indexOf(filterByGearBox) !== -1)
      .filter((instructor: IInstructor) => instructor.car.toLocaleLowerCase().indexOf(filterByCar) !== -1);
  }
}
