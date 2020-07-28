import { Component, OnInit, Input } from '@angular/core';
import { Musician } from 'src/app/models/musician.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css'],
})
export class MusicianComponent implements OnInit {
  @Input() musician: Musician;
  @Input() index: number;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void { }



  onBook() { }
}
