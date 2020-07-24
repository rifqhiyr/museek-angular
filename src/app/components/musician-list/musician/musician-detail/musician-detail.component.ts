import { Component, OnInit, Input } from '@angular/core';
import { Musician } from 'src/app/models/musician.model';

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.css'],
})
export class MusicianDetailComponent implements OnInit {
  @Input('mDetail') musician: Musician;

  constructor() {}

  ngOnInit(): void {}
}
