import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  onSelect(feature: string) {
    this.pageSelected.emit(feature);
  }
}