import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MusiciansComponent } from './components/musicians/musicians.component';
import { MusicianListComponent } from './components/musicians/musician-list/musician-list.component';
import { MusicianComponent } from './components/musicians/musician-list/musician/musician.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MusicianListComponent,
    MusicianComponent,
    MusiciansComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
