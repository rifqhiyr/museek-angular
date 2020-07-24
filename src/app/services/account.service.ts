import { Injectable } from '@angular/core';
import { Musician } from '../models/musician.model';
import { Costumer } from '../models/costumer.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private musician: Musician[] = [
    new Musician(
      1,
      'musician',
      'rifqhiyr@gmail.com',
      '12345678',
      'Rifqi Yuliandri',
      300000,
      'male',
      'Jagakarsa',
      'jakarta',
      'indonesia',
      'im from indonesia',
      ['jazz', 'pop'],
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      2,
      'musician',
      'jhon.doe@gmail.com',
      '12345678',
      'jhon doe',
      500000,
      'male',
      'narogong',
      'bandung',
      'indonesia',
      'im from Bekasi',
      ['jazz', 'pop', 'metal'],
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
  ];
  private costumer: Costumer[] = [
    new Costumer(
      1,
      'costumer',
      'Jhon doe',
      'jhondoe@gmail.com',
      '12345678',
      'male',
      'tambun',
      'Jakarta',
      'indonesia',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
  ];
  constructor() {}

  getMusician() {
    return this.musician.slice();
  }

  getCostumer() {
    return this.costumer.slice();
  }
}
