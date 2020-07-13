import { Component, OnInit } from '@angular/core';
import { Profile } from './profile.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  profiles: Profile[] = [
    new Profile(
      'Rifqi yuliandri',
      'Frontend',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png'
    ),
    new Profile(
      'Alfianinda',
      'Frontend',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png'
    ),
    new Profile(
      'Samuel ezzay',
      'React-native',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png'
    ),
    new Profile(
      'fiki-zulfikar',
      'React-native',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png'
    ),
    new Profile(
      'Muhammad Nur Ali',
      'Backend',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png'
    ),
    new Profile(
      'Reynanda Putra Pratama',
      'Beckend',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
