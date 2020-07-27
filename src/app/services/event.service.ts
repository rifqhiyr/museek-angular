import { Injectable, EventEmitter } from '@angular/core';
import { Booking } from '../models/booking.modal';
import { Event } from '../models/event.modal';
import { BookingService } from './booking.service';


@Injectable({
  providedIn: 'root',
})

export class EventService {

  eventSelected = new EventEmitter<Event>()

  private events: Event[] = [
    new Event('user', [new Booking('birthday', '1', new Date(), 3, 'bandung')])
  ]

  constructor(private bookingService: BookingService) { }

  getEvent() {
    return this.events.slice()
  }

  addBookings(bookings: Booking[]) {
    this.bookingService.addBookings(bookings)
  }
}
