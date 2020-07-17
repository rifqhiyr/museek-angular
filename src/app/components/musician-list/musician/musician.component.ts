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
      1,
      'Metalica',
      ['jazz'],
      'jakarta',
      'Grown up in jakarta, fulltime musician, part time magician, i love colaborate with others musician',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      2,
      'Rhoma Irama',
      ['metal'],
      'bali',
      'lorem Ipsum is simply',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      3,
      'Metalica',
      ['pop'],
      'makassar',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      4,
      'Metalica',
      ['jazz', 'metal', 'pop'],
      'padang',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      5,
      'Metalica',
      ['jazz', 'metal'],
      'bogor',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      6,
      'Metalica',
      ['jazz'],
      'aceh',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ), new Musician(
      7,
      'Metalica',
      ['jazz', 'metal', 'pop'],
      'padang',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      8,
      'Metalica',
      ['jazz', 'metal'],
      'bogor',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ), new Musician(
      9,
      'Metalica',
      ['jazz', 'metal', 'pop'],
      'padang',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
    new Musician(
      10,
      'Metalica',
      ['jazz', 'metal'],
      'bogor',
      'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
      'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void { }
}
