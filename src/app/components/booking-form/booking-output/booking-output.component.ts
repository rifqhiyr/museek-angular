import { Component, OnInit, Input } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-booking-output',
  templateUrl: './booking-output.component.html',
  styleUrls: ['./booking-output.component.css']
})
export class BookingOutputComponent implements OnInit {
  bookings: Booking[];


  constructor(private bookingService: BookingService) { }


  ngOnInit() {
    this.bookings = this.bookingService.getBookings()
    this.bookingService.bookingChanged.subscribe((bookingsData: Booking[]) => {
      this.bookings = bookingsData;
    })
  }

  onSubmit(index: number) {
    this.bookingService.bookEditing.next(index);
  }

  onDelete(index: number) {
    this.bookingService.deleteBooking(index)
  }

}
