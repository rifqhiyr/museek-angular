import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MusicianService } from './musician.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Musician } from '../models/musician.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private musicianService: MusicianService,
    private authService: AuthService
  ) {}

  storeMusicians() {
    const musicians = this.musicianService.getMusicians();

    this.http
      .put('https://museek-app.firebaseio.com/musician.json', musicians)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchMusicians() {
    return this.http
      .get<Musician[]>('https://museek-app.firebaseio.com/musician.json')
      .pipe(
        map((musician) => {
          return musician.map((musician) => {
            return {
              ...musician,
              bookings: musician.bookings ? musician.bookings : [],
            };
          });
        }),
        tap((musicians) => {
          this.musicianService.setMusicians(musicians);
        })
      );
  }
}
