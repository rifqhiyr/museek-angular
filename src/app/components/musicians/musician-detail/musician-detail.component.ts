import { Component, OnInit, Input } from '@angular/core';
import { Musician } from 'src/app/models/musician.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MusicianService } from 'src/app/services/musician.service';

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.css'],
})
export class MusicianDetailComponent implements OnInit {
  musician: Musician;
  id: number;


  constructor(private route: ActivatedRoute, private router: Router, private musicianService: MusicianService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.musician = this.musicianService.getMusician(this.id)
      }
    )
  }


  onBook() {
    this.router.navigate(['../', this.id, 'booking'], { relativeTo: this.route })
    this.musicianService.updateMusician(this.id, this.musician)
  }
}
