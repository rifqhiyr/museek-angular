import { Component, OnInit } from '@angular/core';
import { Musician } from 'src/app/models/musician.model';
import { MusicianService } from 'src/app/services/musician.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  musicianProfiles: Musician[] = [];


  constructor(private musicianService: MusicianService) {
    this.musicianProfiles = this.musicianService.getMusicians()
    // console.log(this.musicianProfiles);

  }

  ngOnInit() {


  }


}
