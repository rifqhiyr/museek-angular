import { Injectable, EventEmitter } from '@angular/core';
import { Costumer } from '../models/costumer.model';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {
  costumerChanged = new EventEmitter<Costumer[]>()

  private costumers: Costumer[] = [
    new Costumer(
      1,
      'Jhon doe',
      'jhondoe@gmail.com',
      '12345678',
      'male',
      'tambun',
      'Jakarta',
      'indonesia',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Costumer(
      2,
      'jane Doe',
      'janedoe@gmail.com',
      '12345678',
      'male',
      'tambun',
      'Jakarta',
      'indonesia',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
  ];


  constructor() { }


  getCostumers() {
    return this.costumers.slice()
  }

  getCostumer(id: number) {
    const costumer = this.costumers.find(
      (c) => {
        return c.id === id
      }
    )
    return costumer
  }

  updateCostumer(id: number, costumerInfo: Costumer) {
    const costumer = this.costumers.find(
      (c) => {
        return c.id === id
      }
    )
    if (costumer) {
      costumer.name = costumerInfo.name,
        costumer.email = costumerInfo.email,
        costumer.password = costumerInfo.password,
        costumer.gender = costumerInfo.gender,
        costumer.address = costumerInfo.address,
        costumer.city = costumerInfo.city,
        costumer.country = costumerInfo.country,
        costumer.imgPath = costumerInfo.imgPath
    }
  }
}
