import { Component, OnInit } from '@angular/core';
import { Musician } from './musician.model';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css'],
})
export class MusicianComponent implements OnInit {
  musicians: Musician[] = [
    new Musician(
      'Metalica',
      'jazz',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      'Metalica',
      'jazz',
      'lorem Ipsum is simply',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      'Metalica',
      'jazz',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      'Metalica',
      'jazz',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      'Metalica',
      'jazz',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      'Metalica',
      'jazz',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
