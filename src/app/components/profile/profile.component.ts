import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  inputDisplay = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.inputDisplay = true
  }

  onSave() {
    this.inputDisplay = false;
  }
}
