import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Musician } from 'src/app/models/musician.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  musicianProfiles: Musician[] = []


  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.musicianProfiles = this.accountService.getMusicians()

  }


}
