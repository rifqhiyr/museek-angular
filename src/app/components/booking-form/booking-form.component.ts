import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/booking.modal';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  bookings: Booking[];
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings()
  }

}
