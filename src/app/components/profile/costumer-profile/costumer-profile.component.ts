import { Component, OnInit, Input } from '@angular/core';
import { Costumer } from 'src/app/models/costumer.model';

@Component({
  selector: 'app-costumer-profile',
  templateUrl: './costumer-profile.component.html',
  styleUrls: ['./costumer-profile.component.css'],
})
export class CostumerProfileComponent implements OnInit {
  @Input('cProfile') costumerProfile: Costumer;

  constructor() {}

  ngOnInit(): void {}
}
