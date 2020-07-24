import { Component, OnInit, Input } from '@angular/core';
import { Musician } from 'src/app/models/musician.model';

@Component({
  selector: 'app-musician-profile',
  templateUrl: './musician-profile.component.html',
  styleUrls: ['./musician-profile.component.css'],
})
export class MusicianProfileComponent implements OnInit {
  @Input('mProfile') musicianProfile: Musician;

  constructor() {}

  ngOnInit() {}
}
