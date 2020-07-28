import { Component, OnInit, Input } from '@angular/core';
import { Costumer } from 'src/app/models/costumer.model';
import { AccountService } from 'src/app/services/account.service';
import { Booking } from 'src/app/models/booking.modal';

@Component({
  selector: 'app-booking-input',
  templateUrl: './booking-input.component.html',
  styleUrls: ['./booking-input.component.css']
})
export class BookingInputComponent implements OnInit {
  @Input('bInput') booking: Booking;
  costumer: Costumer;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.accountService.bookMusician(this.costumer.bookings)
  }
}
