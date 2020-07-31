import { Injectable, EventEmitter } from '@angular/core';
import { Musician } from '../models/musician.model';
import { Costumer } from '../models/costumer.model';
import { MusicianService } from './musician.service';
import { CostumerService } from './costumer.service';
import { BookingService } from './booking.service';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  musicianSelected = new EventEmitter<Musician>();
  costumerSelected = new EventEmitter<Costumer>();

  constructor(private musicianService: MusicianService, private costumerService: CostumerService, private bookingService: BookingService) { }

  getMusicians() {
    return this.musicianService.getMusicians()
  }



  getCostumers() {
    return this.costumerService.getCostumers()
  }

  bookMusician(bookings: Booking[]) {
    this.bookingService.addBookings(bookings)
  }

}
