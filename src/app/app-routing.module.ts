import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MusiciansComponent } from './components/musicians/musicians.component';
import { MusicianStartComponent } from './components/musicians/musician-start/musician-start.component';
import { MusicianDetailComponent } from './components/musicians/musician-detail/musician-detail.component';
import { BookingInputComponent } from './components/booking-form/booking-input/booking-input.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { AuthGuard } from './auth/auth-guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  {
    path: 'musicians',
    component: MusiciansComponent,
    children: [
      { path: '', component: MusicianStartComponent },
      { path: ':id', component: MusicianDetailComponent },
      { path: ':id/booking', component: BookingInputComponent },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [{ path: ':id/edit', component: ProfileComponent }],
  },
  { path: 'event', component: BookingFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
