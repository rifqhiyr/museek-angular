import { NgModule } from '@angular/core'
import { Routes, Route, RouterModule } from '@angular/router'
import { HomepageComponent } from './components/homepage/homepage.component'
import { MusicianListComponent } from './components/musician-list/musician-list.component'
import { ProfileComponent } from './components/profile/profile.component'
import { EventComponent } from './components/event/event.component'

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'musician-list', component: MusicianListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'event', component: EventComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


// const appRoutes: Routes = [
//   { path: '', component: HomepageComponent },
//   { path: 'musician-list', component: MusicianListComponent },
//   { path: 'musician-list/book-form', component: BookingFormComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'profile/:id/edit', component: ProfileComponent },
//   { path: 'event', component: EventComponent }
// ]
