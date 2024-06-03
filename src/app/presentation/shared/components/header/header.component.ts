import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() indexRadio!: string;
  @Output() action = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onAction() {
    this.action.emit();
  }
}
