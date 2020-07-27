import { Injectable } from '@angular/core';
import { Musician } from '../models/musician.model';
import { Costumer } from '../models/costumer.model';
import { MusicianService } from './musician.service';
import { CostumerService } from './costumer.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {


  constructor(private musicianService: MusicianService, private costumerService: CostumerService) { }

  getMusicians() {
    return this.musicianService.getMusicians()
  }



  getCostumers() {
    return this.costumerService.getCostumers()
  }
}
