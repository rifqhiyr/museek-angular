import { NgModule } from '@angular/core'
import { Routes, Route, RouterModule } from '@angular/router'
import { HomepageComponent } from './components/homepage/homepage.component'
import { ProfileComponent } from './components/profile/profile.component'
import { MusiciansComponent } from './components/musicians/musicians.component'
import { MusicianStartComponent } from './components/musicians/musician-start/musician-start.component'
import { MusicianDetailComponent } from './components/musicians/musician-detail/musician-detail.component'
import { BookingInputComponent } from './components/booking-form/booking-input/booking-input.component'
import { BookingOutputComponent } from './components/booking-form/booking-output/booking-output.component'
import { BookingFormComponent } from './components/booking-form/booking-form.component'


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  {
    path: 'musicians', component: MusiciansComponent, children: [
      { path: '', component: MusicianStartComponent },
      { path: ':id', component: MusicianDetailComponent },
      { path: ':id/booking', component: BookingInputComponent }
    ]
  },
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: ':id/edit', component: ProfileComponent }
    ]
  },
  { path: 'event', component: BookingFormComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



