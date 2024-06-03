import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-pad',
  templateUrl: './button-pad.component.html',
  styleUrls: ['./button-pad.component.scss'],
})
export class ButtonPadComponent implements OnInit {
  @Input() text!: string;

  @Output() onAction = new EventEmitter();
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.onAction.emit();
  }
}
