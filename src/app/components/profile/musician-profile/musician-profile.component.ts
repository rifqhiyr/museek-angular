import { Component, OnInit, Input } from '@angular/core';
import { Musician } from 'src/app/models/musician.model';
import { MusicianService } from 'src/app/services/musician.service';

@Component({
  selector: 'app-musician-profile',
  templateUrl: './musician-profile.component.html',
  styleUrls: ['./musician-profile.component.css'],
})
export class MusicianProfileComponent implements OnInit {
  inputDisplay = true;
  musicianProfile: Musician;

  constructor(private musicianService: MusicianService) { }

  ngOnInit() {
    this.musicianProfile = this.musicianService.getMusician(1);
  }

  onEdit() {
    this.inputDisplay = !this.inputDisplay;
  }
  // still not working
  onSave() {
    this.inputDisplay = true;
    this.musicianService.updateMusician(this.musicianProfile.id, this.musicianProfile)
    console.log(this.musicianProfile);

  }
}
