import { Booking } from './booking.modal';

export class Event {
  constructor(public role: string, public bookings: Booking[]) { }
}
