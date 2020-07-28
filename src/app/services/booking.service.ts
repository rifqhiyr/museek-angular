import { Injectable, EventEmitter } from '@angular/core'
import { Booking } from '../models/booking.modal'

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingChanged = new EventEmitter<Booking[]>()

  private bookings: Booking[] = [
    new Booking('birthday', '1', new Date(), 2, 'solo')
  ];

  constructor() { }

  getBookings() {
    return this.bookings.slice();
  }

  addBooking(booking: Booking) {
    this.bookings.push(booking);
    this.bookingChanged.emit(this.bookings.slice())
  }

  addBookings(bookings: Booking[]) {
    this.bookings.push(...bookings);
    this.bookingChanged.emit(this.bookings.slice())
  }
}
