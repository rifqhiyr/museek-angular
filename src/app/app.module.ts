import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MusicianListComponent } from './components/musician-list/musician-list.component';
import { MusicianComponent } from './components/musician-list/musician/musician.component';
import { FooterComponent } from './components/footer/footer.component';
import { MusicianDetailComponent } from './components/musician-list/musician/musician-detail/musician-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CostumerProfileComponent } from './components/profile/costumer-profile/costumer-profile.component';
import { MusicianProfileComponent } from './components/profile/musician-profile/musician-profile.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { BookingInputComponent } from './components/booking-form/booking-input/booking-input.component';
import { BookingOutputComponent } from './components/booking-form/booking-output/booking-output.component';
import { EventComponent } from './components/event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MusicianListComponent,
    MusicianComponent,
    FooterComponent,
    MusicianDetailComponent,
    ProfileComponent,
    CostumerProfileComponent,
    MusicianProfileComponent,
    BookingFormComponent,
    BookingInputComponent,
    BookingOutputComponent,
    EventComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
