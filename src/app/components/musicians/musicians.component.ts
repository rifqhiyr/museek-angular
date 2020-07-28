import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Musician } from 'src/app/models/musician.model';
import { MusicianService } from 'src/app/services/musician.service';

@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.css']
})
export class MusiciansComponent implements OnInit {
  selectedMusician: Musician;
  count: number;

  constructor(private accountService: AccountService, private musicianService: MusicianService) { }

  ngOnInit() {
    this.count = this.musicianService.count()
    this.accountService.musicianSelected
      .subscribe((musician: Musician) => {
        this.selectedMusician = musician;
      })
  }
}
