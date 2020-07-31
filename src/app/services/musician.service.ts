import { Injectable, EventEmitter } from '@angular/core';
import { Musician } from '../models/musician.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  musicianChanged = new Subject<Musician[]>()

  private musicians: Musician[] = [
    new Musician(
      'rifqhiyr@gmail.com',
      '12345678',
      'Rifqi Yuliandri',
      300000,
      'male',
      'Jagakarsa',
      'jakarta',
      'indonesia',
      'im from indonesia',
      ['metal'],
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
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
    new Musician(
      'rifqhiyr@gmail.com',
      '12345678',
      'Jane Doe',
      900000,
      'male',
      'Jagakarsa',
      'jakarta',
      'indonesia',
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      ['metal', 'Pop'],
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG8aGCF47hIswLSTpKfyC6o_1UAL_lE-lhRQ&usqp=CAU'
    ),
    new Musician(
      'rifqhiyr@gmail.com',
      '12345678',
      'Jane Doe 2',
      1400000,
      'male',
      'Jagakarsa',
      'jakarta',
      'indonesia',
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      ['metal', 'Pop'],
      'https://image.freepik.com/free-vector/illustration-person-with-cold_23-2148403858.jpg'
    ),
  ];

  constructor() { }

  count() {
    return this.musicians.length
  }

  getMusicians() {
    return this.musicians.slice()
  }



  getMusician(index: number) {
    return this.musicians[index]
  }

  updateMusician(index: number, newMusician: Musician) {
    this.musicians[index] = newMusician;
    this.musicianChanged.next(this.musicians.slice())
  }

}
