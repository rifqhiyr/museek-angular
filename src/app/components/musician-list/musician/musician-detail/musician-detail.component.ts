import { Component, OnInit, Input } from '@angular/core';
import { Musician } from 'src/app/models/musician.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.css'],
})
export class MusicianDetailComponent implements OnInit {
  @Input() musician: Musician;

  constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }


  onBook() {
    // this.router.navigate(['book-form'],)
  }
}
