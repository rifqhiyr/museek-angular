import { Component, OnInit, OnDestroy, ViewChild, Output } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking-input',
  templateUrl: './booking-input.component.html',
  styleUrls: ['./booking-input.component.css']
})
export class BookingInputComponent implements OnInit, OnDestroy {
  @ViewChild('book') bookInputForm: NgForm;
  bookingSubcription: Subscription;
  @Output() editMode = false;
  editedBookingIndex: number;
  editedBooking: Booking;


  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingSubcription = this.bookingService.bookEditing
      .subscribe((index: number) => {
        this.editedBookingIndex = index;
        this.editMode = true;
        this.editedBooking = this.bookingService.getBooking(index);
        this.bookInputForm.setValue({
          category: this.editedBooking.category,
          duration: this.editedBooking.duration,
          dateEvent: this.editedBooking.dateEvent,
          location: this.editedBooking.location
        })
      });
  }

  onAddBook(form: NgForm) {
    const value = form.value;
    const newBooking = new Booking(value.category, value.dateEvent, value.duration, value.location);
    if (this.editMode) {
      this.bookingService.updateBooking(this.editedBookingIndex, newBooking)
    } else {
      this.bookingService.addBooking(newBooking);
    }
    this.editMode = false;
    form.reset()
  }



  ngOnDestroy(): void {
    this, this.bookingSubcription.unsubscribe()

  }

}
