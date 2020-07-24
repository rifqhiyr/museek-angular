import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.css'],
})
export class MusicianListComponent implements OnInit {
  musicianCount: number;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.musicianCount = this.accountService.getMusician().length;
  }
}
