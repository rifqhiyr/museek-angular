import { Injectable, EventEmitter } from '@angular/core';
import { Musician } from '../models/musician.model';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  musicianChanged = new EventEmitter<Musician[]>()

  private musicians: Musician[] = [
    new Musician(1,
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
    new Musician(2,
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

  constructor() { }


  getMusicians() {
    return this.musicians.slice()
  }

  getMusician(id: number) {
    const musician = this.musicians.find(
      (m) => {
        return m.id === id
      }
    )
    return musician
  }

  updateMusician(id: number, musicianInfo: Musician) {
    const musician = this.musicians.find(
      (m) => {
        return m.id === id
      }
    )
    if (musician) {
      musician.name = musicianInfo.name,
        musician.email = musicianInfo.email,
        musician.password = musicianInfo.password,
        musician.price = musicianInfo.price,
        musician.gender = musicianInfo.gender,
        musician.address = musicianInfo.address,
        musician.city = musicianInfo.city,
        musician.country = musicianInfo.country,
        musician.genre = musicianInfo.genre,
        musician.description = musicianInfo.description,
        musician.imgPath = musicianInfo.imgPath
    }
  }
}
