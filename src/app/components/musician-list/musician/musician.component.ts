import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Musician } from 'src/app/models/musician.model';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css'],
})
export class MusicianComponent implements OnInit {
  @Input() musicians: Musician[];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.musicians = this.accountService.getMusician();
  }
}
