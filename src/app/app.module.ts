import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MusicianListComponent } from './components/musician-list/musician-list.component';
import { MusicianComponent } from './components/musician-list/musician/musician.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { CommentOutputComponent } from './components/comment-section/comment-output/comment-output.component';
import { CommentInputComponent } from './components/comment-section/comment-input/comment-input.component';
import { MusicianDetailComponent } from './components/musician-list/musician/musician-detail/musician-detail.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MusicianListComponent,
    MusicianComponent,
    FooterComponent,
    CommentSectionComponent,
    CommentOutputComponent,
    CommentInputComponent,
    MusicianDetailComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
