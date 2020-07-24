import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Musician } from 'src/app/models/musician.model';
import { Costumer } from 'src/app/models/costumer.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  inputDisplay = true;
  musiciansProfile: Musician[];
  costumersProfile: Costumer[];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.musiciansProfile = this.accountService.getMusician();
    this.costumersProfile = this.accountService.getCostumer();
  }

  onEdit() {
    this.inputDisplay = !this.inputDisplay;
  }

  onSave() {
    this.inputDisplay = true;
  }
}
