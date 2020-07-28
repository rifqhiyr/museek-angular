import { Component, OnInit } from '@angular/core';
import { Costumer } from 'src/app/models/costumer.model';
import { AccountService } from 'src/app/services/account.service';
import { CostumerService } from 'src/app/services/costumer.service';

@Component({
  selector: 'app-costumer-profile',
  templateUrl: './costumer-profile.component.html',
  styleUrls: ['./costumer-profile.component.css'],
})
export class CostumerProfileComponent implements OnInit {
  inputDisplay = true;
  costumerProfile: Costumer;


  constructor(private costumerService: CostumerService) { }

  ngOnInit(): void { this.costumerProfile = this.costumerService.getCostumer(2) }

  onEdit() {
    this.inputDisplay = !this.inputDisplay;
  }

  onSave() {
    this.inputDisplay = true;
  }
}
