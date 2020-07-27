import { Injectable, EventEmitter } from '@angular/core'
import { Musician } from '../models/musician.model'
import { Costumer } from '../models/costumer.model'

@Injectable({ providedIn: 'root', })
export class ProfileService {
  musicianProfileChanged = new EventEmitter<Musician[]>()
  costumerProfileChanged = new EventEmitter<Costumer[]>()

}
