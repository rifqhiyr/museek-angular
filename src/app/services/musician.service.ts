import { Injectable } from '@angular/core';
import { Musician } from '../models/musician.model';
import { Subject } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  musicianChanged = new Subject<Musician[]>()

  private musicians: Musician[] = [
    // new Musician(
    //   'rifqhiyr@gmail.com',
    //   '12345678',
    //   'Rifqi Yuliandri',
    //   300000,
    //   'male',
    //   'Jagakarsa',
    //   'jakarta',
    //   'indonesia',
    //   'im from indonesia',
    //   ['metal'],
    //   'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg',
    //   []
    // ),
    // new Musician(
    //   'jhon.doe@gmail.com',
    //   '12345678',
    //   'jhon doe',
    //   500000,
    //   'male',
    //   'narogong',
    //   'bandung',
    //   'indonesia',
    //   'im from Bekasi',
    //   ['jazz', 'pop', 'metal'],
    //   'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg',
    //   [new Booking('party', '11/07/2020', 2, 'bandung')]
    // ),

  ];

  constructor() { }

  setMusicians(musicians: Musician[]) {
    this.musicians = musicians
    this.musicianChanged.next(this.musicians.slice())
  }

  count() {
    return this.musicians.length
  }

  getMusicians() {
    return this.musicians.slice();
  }



  getMusician(index: number) {
    return this.musicians[index];
  }

  updateMusician(index: number, newMusician: Musician) {
    this.musicians[index] = newMusician;
    this.musicianChanged.next(this.musicians.slice())
  }

}
