import { Component, OnInit, Input } from '@angular/core';
import { Musician } from 'src/app/models/musician.model';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css'],
})
export class MusicianComponent implements OnInit {
  @Input() musician: Musician

  constructor() { }

  ngOnInit(): void {

  }
  onBook() { }
}
