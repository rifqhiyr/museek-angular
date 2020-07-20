import { Component, OnInit } from '@angular/core';
import { Musician } from "./musician/musician.model"

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.css'],
})
export class MusicianListComponent implements OnInit {
  musicianCount = Musician.length;

  constructor() { }

  ngOnInit(): void { }
}
