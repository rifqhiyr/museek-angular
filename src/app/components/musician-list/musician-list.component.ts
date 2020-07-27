import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Musician } from 'src/app/models/musician.model';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.css'],
})
export class MusicianListComponent implements OnInit {
  musicianCount;
  public musicians: Musician[] = []


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.musicians = this.accountService.getMusicians()
  }
}
