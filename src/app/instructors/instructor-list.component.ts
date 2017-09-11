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
  gearboxFilter: string = 'механика';
  instructors: IInstructor[] = [
    {
    "instructorId": 1,
    "instructorName": "Владимиров Владимир Алексеевич",
    "car": "Chevrolet Aveo",
    "gearbox":"механика",
    "cityarea": "Центр",
    "price90min": 190,
    "starRating": 4.5,
    "photoUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
    "photoCarUrl": "",
    "email": "",
    "phone": ""
    },
    {
    "instructorId": 2,
    "instructorName": "Соловьев Вадим Александрович",
    "car": "ZAZ Vida",
    "gearbox":"механика",
    "cityarea": "Центр",
    "price90min": 200,
    "starRating": 3.5,
    "photoUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
    "photoCarUrl": "",
    "email": "",
    "phone": ""
    },
    {
    "instructorId": 3,
    "instructorName": "Разумный Юрий Викторович",
    "car": "Chevrolet Lachetti",
    "gearbox":"механика",
    "cityarea": "Центр",
    "price90min": 200,
    "starRating": 4.0,
    "photoUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
    "photoCarUrl": "",
    "email": "",
    "phone": ""
    }
  ];

  toggleImg(): void {
      this.showImg = !this.showImg;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}
