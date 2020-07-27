import { Component, OnInit, Input } from '@angular/core';
import { Costumer } from 'src/app/models/costumer.model';
import { CostumerService } from 'src/app/services/costumer.service';

@Component({
  selector: 'app-costumer-profile',
  templateUrl: './costumer-profile.component.html',
  styleUrls: ['./costumer-profile.component.css'],
})
export class CostumerProfileComponent implements OnInit {
  @Input('cProfile') costumerProfile: Costumer;
  @Input() value: string;

  constructor(private costumerService: CostumerService) { }

  ngOnInit(): void { }
}
