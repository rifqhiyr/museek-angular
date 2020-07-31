import { Injectable } from '@angular/core'
import { Booking } from '../models/booking.model'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingChanged = new Subject<Booking[]>();
  bookEditing = new Subject<number>();

  private bookings: Booking[] = [
    new Booking('birthday', '11/07/2020', 2, 'solo'),
    new Booking('party', '2020/07/23', 1, 'bandung'),
    new Booking('Graduation', '2020/07/25', 3, 'bandung'),
    new Booking('party', '2020/07/29', 4, 'bandung'),
  ];

  constructor() { }

  getBookings() {
    return this.bookings.slice();
  }

  getBooking(index: number) {
    return this.bookings[index]
  }

  addBooking(booking: Booking) {
    this.bookings.push(booking);
    this.bookingChanged.next(this.bookings.slice())
  }

  addBookings(bookings: Booking[]) {
    this.bookings.push(...bookings);
    this.bookingChanged.next(this.bookings.slice())
  }

  updateBooking(index: number, newBooking: Booking) {
    this.bookings[index] = newBooking;
    this.bookingChanged.next(this.bookings.slice())
  }

  deleteBooking(index: number) {
    this.bookings.splice(index, 1)
    this.bookingChanged.next(this.bookings.slice())
  }
}
