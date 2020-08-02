import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Musician } from '../models/musician.model';
import { DataStorageService } from './data-storage.service';
import { MusicianService } from './musician.service';

@Injectable({ providedIn: 'root' })
export class MusicianResolver implements Resolve<Musician[]> {
  constructor(private dataStorageService: DataStorageService, private musicianService: MusicianService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const musicians = this.musicianService.getMusicians()

    if (musicians.length === 0) {
      return this.dataStorageService.fetchMusicians()
    } else {
      return musicians;
    }
  }
}
