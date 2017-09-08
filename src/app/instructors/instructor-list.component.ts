import { Component } from '@angular/core';

@Component ({
    selector: 'ai-instructors',
    templateUrl: './instructor-list.component.html'
})

export class InstructorListComponent {
  pageTitle = 'Список автоинструкторов г. Днепр';
  products: any[] = [
    {
      "instructorId": 1,
      "instructorName": "Владимиров Владимир Алексеевич",
      "avto": "Chevrolet Aveo",
      "gearbox":"механика",
      "cityarea": "Центр",
      "price45min": 100,
      "starRating": 4.5,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
      "email": "",
      "phone": ""
    },
    {
      "instructorId": 2,
      "instructorName": "Соловьев Вадим Александрович",
      "avto": "ZAZ Vida",
      "gearbox":"механика",
      "cityarea": "Центр",
      "price45min": 100,
      "starRating": 4.0,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
      "email": "",
      "phone": ""
    },
    {
      "instructorId": 3,
      "instructorName": "Разумный Юрий Викторович",
      "avto": "Chevrolet Lachetti",
      "gearbox":"механика",
      "cityarea": "Центр",
      "price45min": 100,
      "starRating": 3.5,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
      "email": "",
      "phone": ""
    }
  ];
}
